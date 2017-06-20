# run-command-shell-extension

A GNOME Shell extension allowing the user to run simple commands from the activities overview search.

There is currently a drawback:
- stdout and stderr from the launched application gets sent to the systemd journal.  I haven't found a way to disable this, but you can use a script in your $PATH to launch whatever you want and redirect stdout and stderr from inside the script.  Easily running scripts from the overview search is actually the main reason I made this.

# Installation

Clone this repo into ~/.local/share/gnome-shell/extensions, e.g.

    mkdir -p ~/.local/share/gnome-shell/extensions
	cd ~/.local/share/gnome-shell/extensions
    git clone https://github.com/arch4rang4r/aorun.git run-command-shell-extension@arch4rang4r.github.com

Then enable it in tweak-tool.
