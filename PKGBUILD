pkgname=aorun
pkgver=0.0.2
pkgrel=1
pkgdesc='GNOME Shell search provider for arbitrary commands'
arch=('any')
url='https://github.com/arch4rang4r/'
license=('GPL3')
depends=('python-gobject' 'python-dbus')
source=('aorun-0.0.2.tar.gz')
sha256sums=('95c5d4aefabf33a435181ec278877a0ea268cb63977f9de41769795b266017be')

package() {
  cd "$pkgname-$pkgver"
  make install DESTDIR="$pkgdir/"
}
