// Xử lý nút chọn Doanh nhiệp - nhà dân

let valueKH = "";

document.getElementById("KTloaiKH").onchange = function () {
    valueKH = document.getElementById("KTloaiKH").value;
    loaiKhachHang(valueKH);
};

function loaiKhachHang(value) {
    if (value == "doanhNghiep") {
        document.getElementById("DN").style.display = 'block';
    }
    else {
        document.getElementById("DN").style.display = 'none';
    }
}


// Xử lý hàm
function tienThue() {

    let maKH = document.getElementById("maKH").value;
    let soKenh = Number(document.getElementById("soKenh").value);

    let tongTien = 0;
    switch (valueKH) {
        case "doanhNghiep":
            tongTien = tinhTienDN(soKenh)
            break;
        case "nhaDan":
            tongTien = tinhTienNhaDan(soKenh)
            break;
        default:
            alert("hãy chọn loại Khách hàng")
            break;
            
    }

    document.getElementById("txtB4").innerHTML = "Mã Khách hàng: " + maKH + "<br> Tiền cáp: " + tongTien + " $";
}

function tinhTienDN(soKenh){
    let soKetNoi = Number(document.getElementById("soKetNoi").value);
    tongTien = 15 + 75 + 5 * soKetNoi + 50 * soKenh
    return tongTien;
}

function tinhTienNhaDan(soKenh){
    tongTien = 4.5 + 20.5 + 7.5 * soKenh
    return tongTien;
}

document.getElementById("btnB4").onclick = tienThue;