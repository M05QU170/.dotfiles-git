" All system-wide defaults are set in $VIMRUNTIME/archlinux.vim (usually just
" /usr/share/vim/vimfiles/archlinux.vim) and sourced by the call to :runtime
" you can find below.  If you wish to change any of those settings, you should
" do it in this file (/etc/vimrc), since archlinux.vim will be overwritten
" everytime an upgrade of the vim packages is performed.  It is recommended to
" make changes after sourcing archlinux.vim since it alters the value of the
" 'compatible' option.

" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages.
runtime! archlinux.vim



filetype plugin indent on

set patchmode=.bak
set noshowmode
set showtabline=2
set laststatus=2
set termguicolors 
set number relativenumber
syntax on
" set background=dark
colorscheme nord 
set encoding=utf-8
if !has('gui_running')
  set t_Co=256
endif
set wildmenu
set wildmode=longest,list,full

call plug#begin()

Plug 'arcticicestudio/nord-vim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'preservim/nerdtree'
"Plug 'itchyny/lightline.vim'
Plug 'dracula/vim'

call plug#end()

"let g:airline_powerline_fonts = 1
"let g:airline_theme='nord'

"let g:lightline = {
"      \ 'colorscheme': 'nord',
"      \ }


" If you prefer the old-style vim functionalty, add 'runtime! vimrc_example.vim'
" Or better yet, read /usr/share/vim/vim80/vimrc_example.vim or the vim manual
" and configure vim to your own liking!

" do not load defaults if ~/.vimrc is missing
"let skip_defaults_vim=1


