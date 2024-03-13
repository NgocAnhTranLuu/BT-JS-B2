function tongTienDien() {

    let hoTen2 = document.getElementById("hoTen2").value;

    let dienTieuThu = Number(document.getElementById("dienTieuThu").value);


    let tongTien = 0;

    if (dienTieuThu <= 50) {
        //50kw đầu - đã tiêu thụ 50kw
        tongTien = dienTieuThu * 500
    } else if (50 < dienTieuThu <= 100) {
        //50kw kế - đã tiêu thụ 100kw
        tongTien = 50 * 500 + (dienTieuThu - 50) * 650
    } else if (100 < dienTieuThu <= 200) {
        //100kw kế - đã tiêu thụ 200kw
        tongTien = 50 * 500 + 50 * 650 + (dienTieuThu - 100) * 850
    } else if (200 < dienTieuThu <= 350) {
        //150kw kế - đã tiêu thụ 350kw
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (dienTieuThu - 200) * 1100
    } else {
        //còn lại
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dienTieuThu - 350) * 1300
    }

    document.getElementById("txtB2").innerHTML = "Họ tên: " + hoTen2 + "<br> Tiền điện: " + tongTien.toLocaleString() + " VNĐ";
}
document.getElementById("btnB2").onclick = tongTienDien;