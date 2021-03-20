# Copyright (c) 2010 Aldo Cortesi
# Copyright (c) 2010, 2014 dequis
# Copyright (c) 2012 Randall Ma
# Copyright (c) 2012-2014 Tycho Andersen
# Copyright (c) 2012 Craig Barnes
# Copyright (c) 2013 horsik
# Copyright (c) 2013 Tao Sauvage
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import os
import re
import socket
import subprocess
from libqtile import qtile
from libqtile.config import Click, Drag, Group, KeyChord, Key, Match, Screen
from libqtile.command import lazy
from libqtile import layout, bar, widget, hook
from libqtile.lazy import lazy
from typing import List


homedir = os.path.expanduser('~')
configdir = [ homedir + '/.config/qtile' ]

rofimenu = "rofi -show drun -modi drun,run,window -show-icons -display-drun 'Apps' -display-run 'Cmds' -display-window 'Windows' -scroll-method 0 -sidebar-mode -lines 20 -columns 1 -terminal termite"

rofiwindowswitcher = "rofi -show window -modi window -cycle -show-icons -display-window 'Windows' -window-format '{w} {c} {t} {n}' -scroll-method 0 -lines 10 -columns 10 -eh 2 -padding 2% -spacing 2%"

terminal = "xfce4-terminal"

mod = "mod4"

alt = "mod1"

keys = [

	# general volume
#    Key([], "XF86AudioRaiseVolume", lazy.spawn("amixer -c 0 -q set Master 2dB+")),
#    Key([], "XF86AudioLowerVolume", lazy.spawn("amixer -c 0 -q set Master 2dB-")),

    Key([], "XF86AudioPlay", lazy.spawn("playerctl play-pause")),
    Key([], "XF86AudioNext", lazy.spawn("playerctl next")),
    Key([], "XF86AudioPrev", lazy.spawn("playerctl previous")),
   # Key([], "XF86AudioStop", lazy.spawn("playerctl stop")),

    # Switch between windows in current stack pane
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "j", lazy.layout.up()),
	Key([mod], "k", lazy.layout.down()),
    Key([mod], "l", lazy.layout.right()),
	
	Key([mod, "shift"], "h", lazy.layout.shuffle_left()),
	Key([mod, "shift"], "j", lazy.layout.shuffle_down()),
	Key([mod, "shift"], "k", lazy.layout.shuffle_up()),
	Key([mod, "shift"], "l", lazy.layout.shuffle_right()),

    # Switch window focus to other pane(s) of stack
    Key([mod], "Tab", lazy.layout.next()),
    Key([mod, "control"], "Tab", lazy.spawn(rofiwindowswitcher)),

	Key([mod], "n", lazy.window.toggle_minimize()),

    # Grow windows. If current window is on the edge of screen and direction
    # will be to screen edge - window would shrink.
    Key([mod, "control"], "h", lazy.layout.grow_left(),
        desc="Grow window to the left"),
    Key([mod, "control"], "l", lazy.layout.grow_right(),
        desc="Grow window to the right"),
    Key([mod, "control"], "j", lazy.layout.grow_down(),
        desc="Grow window down"),
    Key([mod, "control"], "k", lazy.layout.grow_up(), desc="Grow window up"),

    # Key([mod, "shift"], "g", lazy.layout.grow()),
	# Key([mod, "shift"], "s", lazy.layout.shrink()),
	Key([mod, "shift"], "n", lazy.layout.normalize()),
	Key([mod, "shift"], "m", lazy.layout.maximize()),

    # Swap panes of split stack
    #Key([mod, "shift"], "space", lazy.layout.rotate()),
    Key([mod, "shift"], "space", lazy.layout.flip()), 

    # Toggle between split and unsplit sides of stack.
    # Split = all windows displayedgggggsssg
    # Unsplit = 1 window displayed, like Max layout, but still with
    # multiple stack panes
    Key([mod, "shift"], "Return", lazy.layout.toggle_split()),
    Key([mod], "Return", lazy.spawn(terminal)),

    # Toggle between different layouts as defined below
    Key([mod], "space", lazy.next_layout()),
    Key([mod, "shift"], "c", lazy.window.kill()),

    Key([mod, "control"], "r", lazy.restart()),
    #Key([mod, "control"], "q", lazy.shutdown()),
    Key([mod, "control"], "q", lazy.spawn("rofi-logout")),
    
	# dmenu_recency config sits at ~/.config/dmenu_recency/.dmenurc
	Key([mod], 'p', lazy.spawn("dmenu_recency")),
	#Key([mod], 'r', lazy.spawn("rofi -show drun -show-icons")),

	Key([mod], 'r', lazy.spawn(rofimenu)),
	#Key([mod], 'r', lazy.spawn("rofi_run -r")),
    Key([mod], 'm', lazy.spawn("morc_menu")),
    Key([mod], "t", lazy.spawncmd()),

    Key([], 'Print', lazy.spawn("scrot '%S.png' -e 'mv $f $$(xdg-user-dir PICTURES)/Arch-%S-$wx$h.png ; feh $$(xdg-user-dir PICTURES)/Arch-%S-$wx$h.png'")),
	
]

groups = [Group(i) for i in "12345678"]

for i in groups:
    keys.extend([
        # mod1 + letter of group = switch to group
        Key([mod], i.name, lazy.group[i.name].toscreen()),

        # mod1 + shift + letter of group = switch to & move focused window to group
        Key([mod, "shift"], i.name, lazy.window.togroup(i.name)),
    ])

layout_theme = {
    "border_width": 4,
    "margin": 4,
    "markup": "true",
    "border_focus": "#5e81ac",
    "border_normal": "#616E88",
    "border_focus_stack": '#ebcb8b',
    }

layouts = [
	layout.MonadTall(**layout_theme),
	layout.MonadWide(**layout_theme),
	layout.Max(**layout_theme),
	layout.Floating(**layout_theme),
	layout.Columns(**layout_theme),
	layout.VerticalTile(**layout_theme),

	#layout.RatioTile(**layout_theme),
	#layout.Stack(num_stacks=2, **layout_theme),
	#layout.Tile(shift_windows=True, **layout_theme),

]


# COLORS FOR THE BAR

colors = [["#2e3440", "#2e3440"], # 0 Nord Polar Night Darkest
          ["#3b4252", "#3b4252"], # 1 Nord Polar Night Dark Light 
          ["#434c5e", "#434c5e"], # 2 Nord Polar Night Dark Lighter
          ["#4c566a", "#4c566a"], # 3 Nord Polar Night Dark Lightest
          ["#616E88", "#616E88"], # 4 Nord Polar Night Dark Lightest 2
          ["#d8dee9", "#d8dee9"], # 5 Nord Snow Storm White Dark
          ["#e5e9f0", "#e5e9f0"], # 6 Nord Snow Storm White Lighter
          ["#eceff4", "#eceff4"], # 7 Nord Snow Storm White Lightest
          ["#8fbcbb", "#8fbcbb"], # 8 Nord Frost Greenish
          ["#88c0d0", "#88c0d0"], # 9 Nord Frost GreenBlue
          ["#81a1c1", "#81a1c1"], # 10 Nord Frost Blueish
          ["#5e81ac", "#5e81ac"], # 11 Nord Frost Blue
          ["#bf616a", "#bf616a"], # 12 Nord Aurora Red
          ["#d08770", "#d08770"], # 13 Nord Aurora Orange
          ["#ebcb8b", "#ebcb8b"], # 14 Nord Aurora Yellow
          ["#a3be8c", "#a3be8c"], # 15 Nord Aurora Green
          ["#b48ead", "#b48ead"]] # 16 Nord Aurora Pink



widget_defaults = dict(
    font='Monospace',
    fontsize=14,
    padding=4,
    background=colors[0],
    foreground=colors[7]
)
extension_defaults = widget_defaults.copy()

screens = [
    Screen(
        top=bar.Bar(


            [
                widget.GroupBox(
						this_current_screen_border=colors[11],
						padding_y = 5,
                        padding_x = 5,
                        inactive = colors[4],
                        urgent_border = colors[12],
                        urgent_text = colors[12]
						),
                widget.Prompt(
                    prompt="run: ",
						 background=colors[4],
						 bell_style='visual',
                         ignore_dups_history=True,
                         visual_bell_color	= colors[12]
                        ),
                widget.TaskList(
						icon_size=18,
						txt_floating=" ",
						txt_maximized=" ",
						txt_minimized=" ",
                        max_title_width = 300,
						border=colors[11],
						urgent_border=colors[12],
                        ),
               widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
				#widget.Notify(fmt="🔥 {}"),
                widget.ThermalSensor(
						fmt = "🌡 {}",
						foreground_alert = colors[13],
						),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                widget.CPU(
						fmt = ' {}',
						format = '{load_percent}%',
						),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
				widget.Memory(
						fmt = ' {}',
                        format = '{MemUsed}M',
                        padding = 5,
                        ),
				widget.Sep(
						linewidth = 1,
						padding = 5,
						),
                 widget.CheckUpdates(
						 distro = "Arch",
						 custom_command = 'checkupdates',
						 update_interval = 300,
						 display_format = '📦 {updates}',
						 no_update_string = '📦 0',
						 mouse_callbacks = {'Button1': lambda: qtile.cmd_spawn(terminal + ' -x sudo pacman -Syyu')},
						 ),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
               widget.Systray(padding=5),
               widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                widget.Clock(
						padding=5,
						format='%a %b %d, %H:%M'
						),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                widget.CurrentLayoutIcon(scale=0.6),

            ],
            30,
        ),
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
main = None
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False

floating_layout = layout.Floating(
	border_focus = "#d08770",
	border_width = 4,
	border_normal = "#616E88",
	float_rules=[
    # Run the utility of `xprop` to see the wm class and name of an X client.
    *layout.Floating.default_float_rules,
    Match(wm_class='confirmreset'),  # gitk
    Match(wm_class='makebranch'),  # gitk
    Match(wm_class='maketag'),  # gitk
    Match(wm_class='ssh-askpass'),  # ssh-askpass
    Match(title='branchdialog'),  # gitk
    Match(title='pinentry'),  # GPG key password entry
    Match(wm_class='Galculator'),
    Match(wm_class='confirm'),
    Match(wm_class='dialog'),
    Match(wm_class='download'),
    Match(wm_class='error'),
    Match(wm_class='file_progress'),
    Match(wm_class='notification'),
    Match(wm_class='splash'),
	Match(wm_class='toolbar'),
	Match(wm_class='Arandr'),
	Match(wm_class='Xephyr'),
	Match(wm_class='Library'),
	Match(title='Library'),
	Match(title='utility'),
	Match(title='notification'),
	Match(title='toolbar'),
	Match(title='splash'),
	Match(title='dialog'),
	Match(title='Open File'),
	Match(title='About Mozilla Firefox'),
	Match(title='pamac-manager'),
])

auto_fullscreen = True
focus_on_window_activation = "smart"

##### STARTUP APPLICATIONS #####
@hook.subscribe.startup_once
def start_once():
    home = os.path.expanduser('~')
    subprocess.call([home + '/.config/qtile/autostart.sh'])

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "qtile"
