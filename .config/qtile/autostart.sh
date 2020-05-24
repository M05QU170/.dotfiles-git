#!/bin/sh

picom -b &
nm-applet &
blueman-tray &
fcitx &
xfce4-power-manager &
redshift-gtk &
#nitrogen --restore
variety &
setxkbmap -layout gb &
#pamac-tray &
volumeicon &
xfsettingsd &
xfce4-volumed-pulse &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
gnome-keyring-daemon --start --components=pkcs11 &

