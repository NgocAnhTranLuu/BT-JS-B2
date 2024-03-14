function diemTong(){

    //lấy giá trị từ form
    let mon1 = Number(document.getElementById("mon1").value);
    let mon2 = Number(document.getElementById("mon2").value);
    let mon3 = Number(document.getElementById("mon3").value);

    let diemChuan = Number(document.getElementById("diemChuan").value);

    let khuVuc = Number(document.getElementById("khuVuc").value);
    let doiTuong = Number(document.getElementById("doiTuong").value);

    let tongDiem =0;

    tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;

    var ketqua =""
    
    if (tongDiem >= diemChuan && mon1 !== 0  && mon2 !== 0 && mon3 !== 0) {
        ketqua = "Đậu"
    } else {
        ketqua = "Rớt"
    }

    document.getElementById("txtB1").innerHTML = "Tổng điểm của bạn: "+ tongDiem+ "<br>Bạn đã: "+ ketqua;
}
document.getElementById("btnB1").onclick = diemTong;