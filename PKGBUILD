pkgname=aorun
pkgver=0.0.2
pkgrel=1
pkgdesc='GNOME Shell search provider for arbitrary commands'
arch=('any')
url='https://github.com/arch4rang4r/aorun'
license=('GPL3')
depends=('python-gobject' 'python-dbus')
source=('https://github.com/arch4rang4r/aorun/archive/0.0.2.tar.gz')
sha256sums=('016679fa877f7a33c516e398e5a0145298b6b4b74bd6a56b1e3a3e3eaaafe26c')

package() {
  cd "$pkgname-$pkgver"
  make install DESTDIR="$pkgdir/"
}
