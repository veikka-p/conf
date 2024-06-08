{pkgs, ...}: {
  home.packages = with pkgs; [git neovim];
  home.stateVersion = "23.11";
