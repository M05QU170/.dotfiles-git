#!/bin/bash

picom -b &
nm-applet &
blueman-tray &
fcitx &
xfce4-power-manager &
redshift-gtk &
variety &
setxkbmap -layout gb &
#volumeicon &
xfsettingsd &
xfce4-volumed-pulse &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
gnome-keyring-daemon --start --components=pkcs11 &
pamac-tray &
#nitrogen --restore
