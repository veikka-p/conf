#!/bin/bash

set -euo pipefail

source /root/scripts/config.conf

sed -i 's/^#en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen
locale-gen
ln -sf /usr/share/zoneinfo/"${TIMEZONE}" /etc/localtime
hwclock --systohc
echo "LANG=en_US.UTF-8" > /etc/locale.conf
echo "KEYMAP=fi" > /etc/vconsole.conf

# systemd-boot
bootctl --path=/boot install

# systemd-boot - loader.conf
> /boot/loader/loader.conf
cat << EOF > /boot/loader/loader.conf
default arch
timeout 4
console-mode max
editor no
EOF

# systemd-boot - create menu entry
> /boot/loader/entries/arch.conf
cat << EOF > /boot/loader/entries/arch.conf
title arch
linux /vmlinuz-linux-lts
initrd /initramfs-linux-lts.img
options cryptdevice=UUID=$(blkid -s UUID -o value "${REST_PARTITION}"):cryptlvm root=/dev/vg/root quiet rw
EOF

sed -i 's/filesystems/encrypt lvm2 filesystems/g' /etc/mkinitcpio.conf

# Initramfs
mkinitcpio -P

# hostname
echo "${HOSTNAME}" > /etc/hostname

sed -i 's/^#ParallelDownloads/ParallelDownloads/' /etc/pacman.conf
sed -i "/\[multilib\]/,/Include/"'s/^#//' /etc/pacman.conf

# packages
pacman -Syu --noconfirm --needed \
  intel-ucode \
  bluez \
  bluez-utils \
  ttf-jetbrains-mono-nerd \
  archlinux-keyring \
  base-devel \
  unzip \
  zip \
  openssh \
  wl-clipboard \
  ripgrep \
  docker \
  docker-compose \
  neovim \
  tmux \
  firefox \
  chromium \
  discord \
  alacritty \
  lazygit \
  gammastep \
  playerctl \
  plasma \
  sddm \
  dolphin 

# plasma:
#  plasma \
#  sddm \
#  dolphin \
#  flameshot
#
# enable sddm service

# sway packages:
#  wayland \
#  xorg-xwayland \
#  sway \
#  swayidle \
#  swaylock \
#  pavucontrol \
#  wireplumber \
#  pipewire \
#  pipewire-audio \
#  pipewire-alsa \
#  pipewire-jack \
#  pipewire-pulse \
#  pipewire-session-manager \
#  gnome-keyring \
#  polkit \
#  grim \
#  slurp \
#  thunar \
#  gvfs \
#  thunar-volman \

# printing:
#  cups \
#  nss-mdns \
#  hplip \ # maybe not needed
#  hplip-plugin # maybe not needed
#
# enable cups and avahi-daemon (https://wiki.archlinux.org/title/avahi#Hostname_resolution) services

systemctl enable bluetooth docker NetworkManager

# user
useradd -m -G wheel,docker -s /bin/bash "${USERNAME}"
echo "${USERNAME} password"
passwd "${USERNAME}"

cp -r /root/scripts "/home/${USERNAME}/scripts"

chown "${USERNAME}":"${USERNAME}" -R "/home/${USERNAME}/scripts"

echo "root password"
passwd

# add passwordless sudo access (gets cleaned up in 3.sh)
sed -i 's/^# %wheel ALL=(ALL) NOPASSWD: ALL/%wheel ALL=(ALL) NOPASSWD: ALL/' /etc/sudoers
sed -i 's/^# %wheel ALL=(ALL:ALL) NOPASSWD: ALL/%wheel ALL=(ALL:ALL) NOPASSWD: ALL/' /etc/sudoers
