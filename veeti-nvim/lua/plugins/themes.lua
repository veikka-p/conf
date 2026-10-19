return {
	-- {
	-- 	"vague2k/vague.nvim",
	-- 	config = function()
	-- 		require("vague").setup({})
	-- 		vim.cmd("colorscheme vague")
	-- 		vim.cmd(":hi statusline guibg=NONE")
	-- 	end,
	-- },
	{
		"rebelot/kanagawa.nvim",
		priority = 1000,
		config = function()
			require("kanagawa").setup({
				-- you can customize the theme here
				compile = false,
				undercurl = true,
				commentStyle = { italic = true },
				functionStyle = {},
				keywordStyle = { italic = true },
				statementStyle = { bold = true },
				typeStyle = {},
				transparent = false,
				dimInactive = false,
				terminalColors = true,
			})

			vim.o.background = "dark"
			vim.cmd("colorscheme kanagawa")
		end,
	},
	-- {
	-- 	"Tsuzat/NeoSolarized.nvim",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	config = function()
	-- 		vim.cmd([[ colorscheme NeoSolarized ]])
	-- 	end,
	-- },
	-- {
	-- 	"lalitmee/cobalt2.nvim",
	-- 	name = "cobalt2",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	dependencies = { "tjdevries/colorbuddy.nvim", tag = "v1.0.0" },
	-- 	init = function()
	-- 		require("colorbuddy").colorscheme("cobalt2")
	--
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme cobalt2")
	-- 	end,
	-- },
	-- {
	-- 	"rose-pine/neovim",
	-- 	name = "rose-pine",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	config = function()
	-- 		require("rose-pine").setup({
	-- 			dark_variant = "main", -- Choose 'moon', 'dawn', or 'main'
	-- 		})
	-- 		vim.cmd("colorscheme rose-pine")
	-- 	end,
	-- },
	-- {
	-- 	"bluz71/vim-moonfly-colors",
	-- 	name = "moonfly",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	config = function()
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme moonfly")
	-- 	end,
	-- },
	-- {
	-- 	"catppuccin/nvim",
	-- 	name = "catppuccin",
	-- 	priority = 1000,
	-- 	config = function()
	-- 		require("catppuccin").setup({
	-- 			flavour = "frappe",
	-- 		})
	--
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme catppuccin")
	-- 	end,
	-- },
	-- {
	-- 	"rose-pine/neovim",
	-- 	priority = 1000,
	-- 	name = "rose-pine",
	-- 	config = function()
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme rose-pine")
	-- 	end,
	-- },
	-- {
	-- 	"nyoom-engineering/oxocarbon.nvim",
	-- 	priority = 1000,
	-- 	name = "oxocarbon",
	-- 	config = function()
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme oxocarbon")
	-- 	end,
	-- },
	-- {
	-- 	"slugbyte/lackluster.nvim",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	init = function()
	-- 		vim.o.background = "dark"
	-- 		vim.cmd.colorscheme("lackluster")
	-- 		-- vim.cmd.colorscheme("lackluster-hack")
	-- 		-- vim.cmd.colorscheme("lackluster-mint")
	-- 	end,
	-- },
	-- {
	-- 	"ellisonleao/gruvbox.nvim",
	-- 	priority = 1000,
	-- 	config = function()
	-- 		require("gruvbox").setup({})
	--
	-- 		vim.o.background = "light"
	-- 		vim.cmd("colorscheme gruvbox")
	-- 	end,
	-- },
	-- {
	-- "folke/tokyonight.nvim",
	-- priority = 1000,
	-- init = function()
	-- 	vim.cmd.colorscheme("tokyonight-night")
	-- 	vim.cmd.hi("Comment gui=none")
	-- end,
	-- {
	-- 	"Mofiqul/adwaita.nvim",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- },
	-- {
	-- 	"lalitmee/cobalt2.nvim",
	-- 	name = "cobalt2",
	-- 	lazy = false,
	-- 	priority = 1000,
	-- 	dependencies = { "tjdevries/colorbuddy.nvim", tag = "v1.0.0" },
	-- 	init = function()
	-- 		require("colorbuddy").colorscheme("cobalt2")
	--
	-- 		vim.o.background = "dark"
	-- 		vim.cmd("colorscheme cobalt2")
	-- 	end,
	-- },
}
