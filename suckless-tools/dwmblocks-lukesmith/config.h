//Modify this file to change what commands output to your statusbar, and recompile using the make command.
static const Block blocks[] = {
    //  {" 🐧 ", "dwm-kernel",		    360,		        2}, 

	// {" 🔺 ", "dwm-upt",		        60,		            2}, 

	{"", "dwm-pacupdate",		360,		        0},
	
	{"", "dwm-cpu",	        5,		            18},
//	{" 💻 ", "dwm-memory",	        6,		            1},
	{"", "dwm-memory",	        5,		            14},
	//  {" 🔊 ", "dwm-volume",			2,		            10}, 

	{"", "dwm-clock",			60,		            0},
};

//sets delimeter between status commands. NULL character ('\0') means no delimeter.
static char *delim = " ";

// Have dwmblocks automatically recompile and run when you edit this file in
// vim with the following line in your vimrc/init.vim:

// autocmd BufWritePost ~/.local/src/dwmblocks/config.h !cd ~/.local/src/dwmblocks/; sudo make install && { killall -q dwmblocks;setsid dwmblocks & }
