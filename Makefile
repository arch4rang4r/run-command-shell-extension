PREFIX = /usr
DATADIR = ${PREFIX}/share
LIBDIR = ${PREFIX}/lib
LIBEXECDIR = ${PREFIX}/lib

help:
	@echo "Available targets are install and uninstall"
install:
	install -Dm 0755 aorun.py ${DESTDIR}/${LIBEXECDIR}/aorun/aorun.py
	install -Dm 0644 org.aorun.SearchProvider.ini ${DESTDIR}/${DATADIR}/gnome-shell/search-providers/org.aorun.SearchProvider.ini
	install -Dm 0644 org.aorun.SearchProvider.desktop ${DESTDIR}/${DATADIR}/applications/org.aorun.SearchProvider.desktop
	install -Dm 0644 org.aorun.SearchProvider.service.dbus ${DESTDIR}/${DATADIR}/dbus-1/services/org.aorun.SearchProvider.service
	install -Dm 0644 org.aorun.SearchProvider.service.systemd ${DESTDIR}/${LIBDIR}/systemd/user/org.aorun.SearchProvider.service
