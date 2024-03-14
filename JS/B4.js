// Xử lý nút chọn Doanh nhiệp - nhà dân

document.getElementById("KTloaiKH").onchange = function () {
    loaiKhachHang(document.getElementById("KTloaiKH").value)
}

function loaiKhachHang(value) {
    console.log(value)
    if (value == "doanhNghiep") {
        document.getElementById("DN").style.display = 'block';
    }
    else {
        document.getElementById("DN").style.display = 'none';
    }
}


// Xử lý hàm
function tienThue() {
    let doanhNghiep = document.getElementById("doanhNghiep");
    let nhaDan = document.getElementById("nhaDan");

    let maKH = document.getElementById("maKH").value;

    let soKetNoi = Number(document.getElementById("soKetNoi").value);
    let soKenh = Number(document.getElementById("soKenh").value);


    let LoaiKH = "";
    LoaiKH = kiemTraLoaiKH(doanhNghiep,nhaDan)
    // console.log(LoaiKH)


    let tongTien = 0;
    switch (LoaiKH) {
        case "doanhNghiep":
            tongTien = (15 + 75 + 5 * soKetNoi + 50 * soKenh)
            break;
        case "nhaDan":
            tongTien = (4.5 + 20.5 + 7.5 * soKenh)
            break;
        default:
            alert("hãy chọn loại Khách hàng")
            break;
            
    }


    document.getElementById("txtB4").innerHTML = "Mã Khách hàng: " + maKH + "<br> Tiền cáp: " + tongTien + " $";
}

// Hàm kiểm tra loại Khách hàng
function kiemTraLoaiKH(option1,option2) {
    let LoaiKH = "";
    if (option1.checked) {
        LoaiKH = option1.value
    }
    else if (option2.checked) {
        LoaiKH = option2.value
    }
    else{alert("hãy chọn loại Khách hàng")}
    return LoaiKH;
}


document.getElementById("btnB4").onclick = tienThue;