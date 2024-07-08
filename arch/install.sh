#!/bin/bash

set -euo pipefail

source "./utils.sh"

config_set DISK "/dev/sda"
config_set USERNAME "veikkap"
config_set TIMEZONE "Europe/Helsinki"
config_set HOSTNAME "arch"

bash "./0.sh"
arch-chroot /mnt "/root/scripts/1.sh"
arch-chroot /mnt /usr/bin/runuser -u "${USERNAME}" -- "/home/${USERNAME}/scripts/2.sh"
arch-chroot /mnt "/root/scripts/3.sh"
