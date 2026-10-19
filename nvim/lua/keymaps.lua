vim.keymap.set("n", "<leader>w", [[:w<CR>]], { noremap = true, silent = true })

vim.keymap.set("n", "<Esc>", "<cmd>nohlsearch<CR>")

vim.keymap.set("t", "<Esc><Esc>", "<C-\\><C-n>", { desc = "Exit terminal mode" })

vim.keymap.set("n", "<C-h>", "<C-w><C-h>", { desc = "Move focus to the left window", noremap = true })
vim.keymap.set("n", "<C-l>", "<C-w><C-l>", { desc = "Move focus to the right window", noremap = true })
vim.keymap.set("n", "<C-j>", "<C-w><C-j>", { desc = "Move focus to the lower window", noremap = true })
vim.keymap.set("n", "<C-k>", "<C-w><C-k>", { desc = "Move focus to the upper window", noremap = true })

vim.keymap.set("n", "<leader>e", vim.diagnostic.open_float, { desc = "Open floating diagnostic message" })
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")

vim.keymap.set("n", "M", vim.diagnostic.goto_prev)
vim.keymap.set("n", "m", vim.diagnostic.goto_next)

vim.keymap.set(
	"n",
	"<leader>i",
	":let @/='\\<'.expand('<cword>').'\\>'<CR>:set hlsearch<CR>",
	{ noremap = true, silent = true }
)
vim.keymap.set("n", "xx", ":nohlsearch<CR>", { noremap = true, silent = true })

-- highlight
local highlight_group = vim.api.nvim_create_augroup("YankHighlight", { clear = true })
vim.api.nvim_create_autocmd("TextYankPost", {
	callback = function()
		vim.highlight.on_yank()
	end,
	group = highlight_group,
	pattern = "*",
})

-- Command to insert a C# <summary> block
vim.api.nvim_create_user_command("GenSummary", function()
	local lines = {
		"/// <summary>",
		"/// ",
		"/// </summary>",
	}
	vim.api.nvim_put(lines, "l", true, true)
	vim.api.nvim_feedkeys("kA", "n", true) -- Move cursor to the line between <summary> tags
end, {})

vim.keymap.set("n", "<leader>s", ":GenSummary<CR>", { noremap = true, silent = true, desc = "Insert <summary> block" })
