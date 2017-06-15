# aorun

aorun provides a search provider for GNOME Shell that allows executing arbitrary shell commands from the activities overview, similar to KDE's krunner allowing launching both .desktop entries and shell commands.

# Installation

For Arch users, run makepkg with the provided PKGBUILD.  I might put a version in the AUR some time.  For other distros, run

    git clone https://github.com/arch4rang4r/aorun.git
	cd aorun
	make install

You may have to restart GNOME Shell before aorun will work.

# TODO

- Add uninstall target to Makefile
- Autocomplete search terms, i.e. have it actually be a search
- Possibly provide a gui launcher that can be used in other desktops
