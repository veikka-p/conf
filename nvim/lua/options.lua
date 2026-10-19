vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

vim.o.mouse = "a"
vim.opt.guicursor = ""
vim.o.hlsearch = false

vim.wo.number = true
-- vim.o.relativenumber = true
vim.wo.signcolumn = "no"
vim.o.wrap = false
vim.opt.laststatus = 0
vim.opt.scrolloff = 8

vim.o.clipboard = "unnamedplus"

vim.o.updatetime = 50
vim.o.timeoutlen = 300

vim.o.completeopt = "menuone,noselect"

vim.o.termguicolors = true

vim.o.ignorecase = true
vim.o.smartcase = true
vim.o.breakindent = true
vim.o.smartindent = true
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

vim.o.scrolloff = 8

vim.o.swapfile = false
vim.o.backup = false
vim.o.undofile = true

vim.filetype.add({
	extension = {
		templ = "templ",
	},
})

vim.g.omni_sql_no_default_maps = 1

vim.opt.list = true
vim.opt.listchars = {
	tab = "⇥ ",
	trail = "·",
	space = "·",
}

vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")
