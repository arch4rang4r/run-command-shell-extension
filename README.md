# run-command-shell-extension

A GNOME Shell extension allowing the user to run simple commands from the activities overview search.

There are currently 2 drawbacks:
- Due to the way gnome-shell's search splits search terms on whitespace, you will see multiple results for a command with arguments passed to it.  You *should* be able to select any of them, and let's just hope gnome-shell gives the extension the terms in the right order.  It seems to for me. I think I should be able to fix the seeing-multiple-results thing though. Maybe.
- stdout and stderr from the launched application gets sent to the systemd journal.  I haven't found a way to disable this, but you can use a script in your $PATH to launch whatever you want and redirect stdout and stderr from inside the script.  Easily running scripts from the overview search is actually the main reason I made this.

# Installation

Clone this repo into ~/.local/share/gnome-shell/extensions, e.g.

    mkdir -p ~/.local/share/gnome-shell/extensions
	cd ~/.local/share/gnome-shell/extensions
    git clone https://github.com/arch4rang4r/aorun.git run-command-shell-extension@arch4rang4r.github.com
