#!/bin/sh

function run {
  if ! pgrep $1 ;
  then
    $@&
  fi
}

run nm-applet &
run xfce4-power-manager & 
run redshift-gtk &
#run nitrogen --restore &
#setxkbmap -layout gb
run pamac-tray &
run volumeicon &
run "xfsettingsd" &
run "xfce4-volumed-pulse" &
run "/usr/lib/xfce4/notifyd/xfce4-notifyd" &
run /usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
run gnome-keyring-daemon --start --components=pkcs11 &
run ksuperkey -e 'Super_L=Alt_L|F1' &
run ksuperkey -e 'Super_R=Alt_L|F1' &
