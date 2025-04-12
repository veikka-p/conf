return {
	"ThePrimeagen/harpoon",
	dependencies = { "nvim-lua/plenary.nvim" },
	config = function()
		require("harpoon").setup()

		local mark = require("harpoon.mark")
		local ui = require("harpoon.ui")

		vim.keymap.set("n", "<leader>a", mark.add_file, { desc = "Harpoon: Add file" })
		vim.keymap.set("n", "<leader>h", ui.toggle_quick_menu, { desc = "Harpoon: Toggle menu" })
		vim.keymap.set("n", "<leader>1", function()
			ui.nav_file(1)
		end, { desc = "Harpoon: File 1" })
		vim.keymap.set("n", "<leader>2", function()
			ui.nav_file(2)
		end, { desc = "Harpoon: File 2" })
		vim.keymap.set("n", "<leader>3", function()
			ui.nav_file(3)
		end, { desc = "Harpoon: File 3" })
		vim.keymap.set("n", "<leader>4", function()
			ui.nav_file(4)
		end, { desc = "Harpoon: File 4" })
	end,
}
