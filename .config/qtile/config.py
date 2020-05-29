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

import os, subprocess
import re
import socket
from libqtile.config import Key, Screen, Group, Drag, Click
from libqtile.command import lazy
from libqtile import layout, bar, widget, hook, extension
from typing import List  # noqa: F401

homedir = os.path.expanduser('~')
configdir = [ homedir + '/.config/qtile' ]

rofimenu = "rofi -show drun -modi drun,run,window -show-icons -display-drun 'Apps' -display-run 'Cmds' -display-window 'Windows' -scroll-method 0 -sidebar-mode -lines 20 -columns 1 -terminal alacritty"

rofiwindowswitcher = "rofi -show window -modi window -cycle -show-icons -display-window 'Windows' -window-format '{w} {c} {t} {n}' -scroll-method 0 -lines 10 -columns 10 -eh 2 -padding 2% -spacing 2%"




mod = "mod4"

alt = "mod1"

keys = [

	# general volume
    Key([], "XF86AudioRaiseVolume", lazy.spawn("amixer -c 0 -q set Master 2dB+")),
    Key([], "XF86AudioLowerVolume", lazy.spawn("amixer -c 0 -q set Master 2dB-")),

    Key([], "XF86AudioPlay", lazy.spawn("playerctl play-pause")),
    Key([], "XF86AudioNext", lazy.spawn("playerctl next")),
    Key([], "XF86AudioPrev", lazy.spawn("playerctl previous")),
    Key([], "XF86AudioStop", lazy.spawn("playerctl stop")),

    # Switch between windows in current stack pane
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "j", lazy.layout.up()),
	Key([mod], "k", lazy.layout.down()),
    Key([mod], "l", lazy.layout.right()),


	# Key([mod, "shift"], "j", lazy.layout.flip_down()),
	# Key([mod, "shift"], "k", lazy.layout.flip_up()),
	# Key([mod, "shift"], "h", lazy.layout.flip_left()),
	# Key([mod, "shift"], "l", lazy.layout.flip_right()),
	
	Key([mod, "shift"], "h", lazy.layout.shuffle_left()),
	Key([mod, "shift"], "j", lazy.layout.shuffle_down()),
	Key([mod, "shift"], "k", lazy.layout.shuffle_up()),
	Key([mod, "shift"], "l", lazy.layout.shuffle_right()),
	
	# Key([mod, alt], "h", lazy.layout.grow_left()),
    # Key([mod, alt], "l", lazy.layout.grow_right()),
    # Key([mod, alt], "j", lazy.layout.grow_down()),
    # Key([mod, alt], "k", lazy.layout.grow_up()),

    # Move windows up or down in current stack
    # Key([mod, "control"], "k", lazy.layout.shuffle_down()),
    # Key([mod, "control"], "j", lazy.layout.shuffle_up()),

    # Switch window focus to other pane(s) of stack
    Key([mod], "Tab", lazy.layout.next()),
    Key([mod, "control"], "Tab", lazy.spawn(rofiwindowswitcher)),

	Key([mod], "n", lazy.window.toggle_minimize()),

    Key([mod, "shift"], "g", lazy.layout.grow()),
	Key([mod, "shift"], "s", lazy.layout.shrink()),
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
    Key([mod], "Return", lazy.spawn("alacritty")),

    # Toggle between different layouts as defined below
    Key([mod], "space", lazy.next_layout()),
    Key([mod, "shift"], "c", lazy.window.kill()),

    Key([mod, "control"], "r", lazy.restart()),
    #Key([mod, "control"], "q", lazy.shutdown()),
    Key([mod, "control"], "q", lazy.spawn("rofi-logout")),
    
	#Colors and font config sits at ~/.dmenurc
	Key([mod], 'd', lazy.spawn("dmenu_recency")), #("dmenu_run -fn 'Noto-11' -sb '#5E81AC' -sf '#eceff4' -nb '#2e3440' -nf '#D8DEE9'")),
	#Key([mod], 'r', lazy.spawn("rofi -show drun -show-icons")),

	Key([mod], 'r', lazy.spawn(rofimenu)),
	#Key([mod], 'r', lazy.spawn("rofi_run -r")),
    Key([mod], 'm', lazy.spawn("morc_menu")),
    Key([mod], "t", lazy.spawncmd()),

    Key([], 'Print', lazy.spawn("scrot '%S.png' -e 'mv $f $$(xdg-user-dir PICTURES)/Screenshots/Manjaro-%S-$wx$h.png ; feh $$(xdg-user-dir PICTURES)/Screenshots/Manjaro-%S-$wx$h.png'")),
	
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
    "border_normal": "#4C566A",
    "auto_float_types": {'toolbar', 'utility', 'splash', 'dialog', 'notification'}
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

def init_colors():
    return [["#2F343F", "#2F343F"], # color 0
            ["#2F343F", "#2F343F"], # color 1
            ["#c0c5ce", "#c0c5ce"], # color 2
            ["#fba922", "#fba922"], # color 3
            ["#3384d0", "#3384d0"], # color 4
            ["#f3f4f5", "#f3f4f5"], # color 5
            ["#cd1f3f", "#cd1f3f"], # color 6
            ["#62FF00", "#62FF00"], # color 7
            ["#6790eb", "#6790eb"], # color 8
            ["#a9a9a9", "#A9A9A9"], # color 9
            ["#222324", "#222324"], # color 10
            ["#924441", "#924441"], # color 11
            ["#00bcd4", "#00bcd4"], # colors[12] (adapta nokto)
            ["#A52A2A", "#A52A2A"], # colors[13] {cherry colour)
            ["#2e3440", "#2e3440"], #colors[14] dark bar color ("polar night" nord scheme)
            ["#eceff4", "#eceff4"], #colors[15] snow storm nord scheme for text 
            ]


colors = init_colors()


widget_defaults = dict(
    font='Monospace',
    fontsize=13,
    padding=4,
    background=colors[14],
    foreground=colors[15]
)
extension_defaults = widget_defaults.copy()

screens = [
    Screen(
#        bottom=bar.Bar(
        top=bar.Bar(


            [
                widget.GroupBox(
						this_current_screen_border='5e81ac',
						padding_y = 5,
                        padding_x = 5,
                        inactive = "#7b88a1",
                        #highlight_method = "block",
                        urgent_border = 'bf616a',
                        urgent_text = 'bf616a'
						),
                widget.Prompt(
						 prompt="run: ",
						 background="#4c566a",
						 bell_style='visual',
                         ignore_dups_history=True,
                         visual_bell_color	= 'bf616a'
                        ),
                widget.TaskList(
						icon_size=18,
						txt_floating=" ",
						txt_maximized=" ",
						txt_minimized=" ",
                        max_title_width = 200,
						#highlight_method='block',
						border='5E81AC',
                        ),
				#widget.Sep(),
				# widget.Net(
						# #fontsize=14,
						# interface='wlp2s0',
						# format='{down}↓↑{up}'
						# ),
               widget.Sep(
                        linewidth = 0,
                        padding = 5,
                        ),
               widget.TextBox(
                        text="CPU",
                        fontsize = 12,
                        padding = 0,
                        ),
				# widget.CPUGraph(
                         # width = 50,
                         # line_width = 2,
                         # type = 'line',
                        # ),
                widget.CPU(
						foreground = '88c0d0',
						format = '{load_percent}%',
						),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),			
				widget.TextBox(
                        text="Mem",
                        ),
				widget.Memory(
                        format = '{MemUsed}M',
                        foreground = '88c0d0',
                        padding = 5,
                        ),
				widget.Sep(
						linewidth = 1,
						padding = 5,
						),
				# widget.KeyboardLayout(
						# ),
				# widget.Sep(
						# linewidth = 1,
						# padding = 5,
						# ),
				widget.Pacman(
                       execute = "alacritty",
                       update_interval = 600,
                       #foreground = 'A3BE8C',
                       #unavailable = 'D08770',
                       ),
                # widget.CheckUpdates(
						# colour_have_updates = 'D08770',#"A3BE8C",
						# #custom_command = 'sudo pacman -Syyu',
						# execute = "termite",
						# update_interval = 600,
						# display_format = '{updates}'
						# #colour_no_updates = 'D08770',
						# ),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                # widget.Backlight(
						# backlight_name="intel_backlight",
						# format="{percent:2.0%}",
						# ),
               widget.Systray(padding=5),
               # widget.Notify(
						# fmt=" 🔥 {} ",
						# default_timeout = 5,
						# ),
               widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                widget.Clock(
                padding=5,
                format='%a %b %d, %H:%M'
                #format='%Y-%m-%d %a %I:%M %p'
                ),
				widget.Sep(
                        linewidth = 1,
                        padding = 5,
                        ),
                widget.CurrentLayoutIcon(scale=0.6),

            ],
            size=32,
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

@hook.subscribe.client_new
def set_floating(window):
    if (window.window.get_wm_transient_for()
            or window.window.get_wm_type() in floating_types):
        window.floating = True


floating_types = ["notification", "toolbar", "splash", "dialog"]

floating_layout = layout.Floating(
	**layout_theme,
	float_rules=[
	{'wmclass': 'confirm'},
	{'wmclass': 'dialog'},
	{'wmclass': 'download'},
	{'wmclass': 'error'},
	{'wmclass': 'file_progress'},
	{'wmclass': 'notification'},
	{'wmclass': 'splash'},
	{'wmclass': 'toolbar'},
	{'wmclass': 'Arandr'},	#added from acrolinux
	{'wmclass': 'confirmreset'},  # gitk
	{'wmclass': 'makebranch'},  # gitk
	{'wmclass': 'maketag'},  # gitk
	{'wmclass': 'Galculator'},
	{'wmclass': 'Xephyr'},
	{'wmclass': 'Library'},
	{'wname': 'Library'},
    {'wname': 'Open File'},
    {'wname': 'About Mozilla Firefox'},
    {'wname': 'pamac-manager'},     	#added from acrolinux
    {'wname': 'branchdialog'},  # gitk
    {'wname': 'pinentry'},  # GPG key password entry
    {'wmclass': 'ssh-askpass'},  # ssh-askpass
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
wmname = "LG3D"
