function tienThue() {

    let hoTen3 = document.getElementById("hoTen3").value;

    let thuNhapCN = Number(document.getElementById("thuNhapCN").value);
    let ngPhuThuoc = Number(document.getElementById("ngPhuThuoc").value);


    //thu nhập chịu thuế = thuNhapCN - 4,000,000 - ngPhuThuoc * 1,600,000
    TTCT = thuNhapCN - 4000000 - ngPhuThuoc * 1600000

    let tongTien = 0;

    if (TTCT <= 60000000) {
        tongTien = TTCT * 0.05
    } else if (60000000 < TTCT <= 120000000) {
        tongTien = TTCT * 0.1
    } else if (120000000 < TTCT <= 210000000) {
        tongTien = TTCT * 0.15
    } else if (210000000 < TTCT <= 384000000) {
        tongTien = TTCT * 0.2
    } else if (384000000 < TTCT <= 624000000) {
        tongTien = TTCT * 0.25
    } else if (624000000 < TTCT <= 960000000) {
        tongTien = TTCT * 0.3
    } else {
        tongTien = TTCT * 0.35
    }

    document.getElementById("txtB3").innerHTML = "Họ tên: " + hoTen3 + "<br> Tiền thuế: " + tongTien.toLocaleString() + " VNĐ";
}
document.getElementById("btnB3").onclick = tienThue;