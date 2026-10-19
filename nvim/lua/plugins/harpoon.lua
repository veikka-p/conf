return {
	"ThePrimeagen/harpoon",
	dependencies = { "nvim-lua/plenary.nvim" },
	config = function()
		local harpoon = require("harpoon")

		harpoon.setup()

		-- Keymaps
		local keymap = vim.keymap.set
		keymap("n", "<leader>hm", function()
			require("harpoon.mark").add_file()
		end)
		keymap("n", "<leader>hs", function()
			require("harpoon.ui").toggle_quick_menu()
		end)
		keymap("n", "<leader>1", function()
			require("harpoon.ui").nav_file(1)
		end)
		keymap("n", "<leader>2", function()
			require("harpoon.ui").nav_file(2)
		end)
		keymap("n", "<leader>3", function()
			require("harpoon.ui").nav_file(3)
		end)
		keymap("n", "<leader>4", function()
			require("harpoon.ui").nav_file(4)
		end)

		keymap("n", "<leader>5", function()
			require("harpoon.ui").nav_file(5)
		end)

		keymap("n", "<leader>6", function()
			require("harpoon.ui").nav_file(6)
		end)

		keymap("n", "<leader>7", function()
			require("harpoon.ui").nav_file(7)
		end)

		keymap("n", "<leader>8", function()
			require("harpoon.ui").nav_file(8)
		end)

		keymap("n", "<leader>hc", function()
			require("harpoon.mark").clear_all()
			print("harpoon: All marks cleared")
		end)

		-- Highlighting (optional, for customizing Harpoon UI)
		vim.cmd("highlight! HarpoonInactive guibg=NONE guifg=#63698c")
		vim.cmd("highlight! HarpoonActive guibg=NONE guifg=white")
		vim.cmd("highlight! HarpoonNumberActive guibg=NONE guifg=#7aa2f7")
		vim.cmd("highlight! HarpoonNumberInactive guibg=NONE guifg=#7aa2f7")
		vim.cmd("highlight! TabLineFill guibg=NONE guifg=white")
	end,
}
