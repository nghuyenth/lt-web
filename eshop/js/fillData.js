function fillData_BaiViet(){
    const apiUrl = 'https://localhost:7146/api/BaiViet/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('postTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenBaiViet}</td>
                            <td>${post.thoiGianTao}</td>
                            <td>${post.tenTacGia}</td>
                            <td>${post.noiDungNgan}</td>
                            <td>${post.hinhAnh}</td>
                            <td>${post.tenChuDe}</td>
                            <td><button class="edit-btn" onclick="editPost(this)">Sửa</button>
                            <button class="delete-btn" onclick="deletePost(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });
        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu bài viết thất bại');
        }
    }
    };

    // <td>${post.noiDung}</td>

    // <td>${post.taiKhoanId}</td>
    xhr.send();                             
}

function fillData_ChuDe(){
    const apiUrl = 'https://localhost:7146/api/ChuDe/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('topicTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenChuDe}</td>
                            <td>${post.noiDung}</td>
                            <td>${post.tenLoaiBaiViet}</td>
                            <td><button class="edit-btn" onclick="editTopic(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteTopic(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu chủ đề thất bại');
        }
    }
    };

    xhr.send();                             
}

function fillData_LoaiBaiViet(){
    const apiUrl = 'https://localhost:7146/api/LoaiBaiViet/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('categoryTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenLoaiBaiViet}</td>
                            <td><button class="edit-btn" onclick="editTopic(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteTopic(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu loại bài viết thất bại');
        }
    }
    };

    xhr.send();                             
}

function fillData_LoaiKhoaHoc(){
    const apiUrl = 'https://localhost:7146/api/LoaiKhoaHoc/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('courseTypeBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenLoaiKhoaHoc}</td>
                            <td><button class="edit-btn" onclick="editCourseType(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteCourseType(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu loại khóa học thất bại');
        }
    }
    };

    xhr.send();                             
}

function fillData_KhoaHoc(){
    const apiUrl = 'https://localhost:7146/api/KhoaHoc/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('courseTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenKhoaHoc}</td>
                            <td>${post.thoiGianHoc}</td>
                            <td>${post.gioiThieu}</td>
                            <td>${post.noiDung}</td>
                            <td>${post.hocPhi}</td>
                            <td>${post.soHocVien}</td>
                            <td>${post.soLuongMon}</td>
                            <td>${post.hinhAnh}</td>
                            <td>${post.loaiKhoaHocId}</td>
                            <td><button class="edit-btn" onclick="editRow(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu khóa học thất bại');
        }
    }
    };

    xhr.send();                             
}

function fillData_HocVien(){
    const apiUrl = 'https://localhost:7146/api/HocVien/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('studentTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.hinhAnh}</td>
                            <td>${post.hoTen}</td>
                            <td>${post.ngaySinh}</td>
                            <td>${post.sdt}</td>
                            <td>${post.email}</td>
                            <td>${post.tinhThanh}</td>
                            <td>${post.quanHuyen}</td>
                            <td>${post.phuongXa}</td>
                            <td>${post.soNha}</td>
                            <td><button class="edit-btn" onclick="editRow(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu học viên thất bại');
        }
    }
    };

    xhr.send();                             
}

function fillData_DangKyHoc(){
    const apiUrl = 'https://localhost:7146/api/DangKyHoc/GetAll';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Xử lý phản hồi từ API
        const responseData = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('registrationTableBody');

        // Xóa bỏ các dòng cũ trong bảng
        tableBody.innerHTML = '';

        // Thêm dữ liệu mới vào bảng
        responseData.forEach(function (post) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${post.tenKhoaHoc}</td>
                            <td>${post.tenHocVien}</td>
                            <td>${post.ngayDangKy}</td>
                            <td>${post.ngayBatDau}</td>
                            <td>${post.ngayKetThuc}</td>
                            <td>${post.tenTinhTrangHoc}</td>
                            <td>${post.tenTaiKhoan}</td>
                            <td><button class="edit-btn" onclick="editRow(this)">Sửa</button>
                            <button class="delete-btn" onclick="deleteRow(this)">Xóa</button></td>`;
            tableBody.appendChild(row);
        });

        } else {
        // Xử lý lỗi nếu có
        console.error(xhr.status);
        alert('Lấy dữ liệu học viên thất bại');
        }
    }
    };

    xhr.send();                             
}