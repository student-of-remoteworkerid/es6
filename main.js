// ambil element
const data = document.getElementById('data');

// ES5

// ES6
// modul untuk member class
class Siswa {
    constructor(username, password, name_kelas) {
        this.username = username;
        this.password = password;
        this.name_kelas = name_kelas;
    }

    join() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.name_kelas);
    }

    countMember() {
        console.log('Tersedia 100 member');
    }

}

// let addSiswa = new Siswa('bwastudio', '230fsdf', 'Web Design');
// addSiswa.join();

class Membership extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    joinPackage() {
        console.log('Hi' + this.username + ' telah langganan paket ' + this.paket);
    }
}

let addMember = new Membership('bwastudio', 'Premium');
addMember.joinPackage();
addMember.countMember();