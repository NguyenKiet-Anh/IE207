---------------------------------------------------------------------- Create Database ----------------------------------------------------------------------
CREATE DATABASE "WTL"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
DROP DATABASE WTL

-------------------------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------- Create and Alter Data Tables ---------------------------------------------------------------
CREATE TABLE LOAI_TK
(
	maloai smallserial NOT NULL,
	tenloai varchar(10) NOT NULL,
	qtv boolean NOT NULL,
	CONSTRAINT pk_loai_tk PRIMARY KEY (maloai)
);

ALTER TABLE IF EXISTS LOAI_TK

SELECT * FROM LOAI_TK

TRUNCATE TABLE LOAI_TK;

DROP TABLE LOAI_TK;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE TAI_KHOAN
(
	matk serial NOT NULL,
	tendangnhap varchar(50) NOT NULL UNIQUE,
	tentk varchar(50),
	sdt varchar(15) UNIQUE,
	email varchar(100) UNIQUE,
	diachi varchar(200),
	gioithieu varchar(500),
	cccd varchar(15) UNIQUE,
	msthue varchar(15) UNIQUE,
	gioitinh varchar(5),
	ngaysinh date, -- defalut format "yyyy-mm-dd"
	matkhau varchar(100) NOT NULL,
	loaitk smallint NOT NULL,
	sodu money NOT NULL DEFAULT 0,
	CONSTRAINT pk_tai_khoan PRIMARY KEY (matk),
	CONSTRAINT fk_tai_khoan_to_loai_tk FOREIGN KEY (loaitk) REFERENCES LOAI_TK(maloai)
);

ALTER TABLE IF EXISTS TAI_KHOAN

SELECT * FROM TAI_KHOAN

TRUNCATE TABLE TAI_KHOAN;

DROP TABLE TAI_KHOAN;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE LIEN_HE
(
	matk int NOT NULL,
	tenkh varchar(50) NOT NULL,
	sdt varchar(15) NOT NULL,
	CONSTRAINT pk_lien_he PRIMARY KEY(matk, sdt),
	CONSTRAINT fk_lien_he_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS LIEN_HE

SELECT * FROM LIEN_HE

TRUNCATE TABLE LIEN_HE;

DROP TABLE LIEN_HE;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE LIEN_KET
(
	matk int NOT NULL,
	mxh varchar(30) NOT NULL,
	CONSTRAINT pk_lien_ket PRIMARY KEY (matk, mxh),
	CONSTRAINT fk_lien_ket_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS LIEN_KET

SELECT * FROM LIEN_KET

TRUNCATE TABLE LIEN_KET;

DROP TABLE LIEN_KET;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE THIET_BI
(
	matk int NOT NULL,
	tenthietbi varchar(30) NOT NULL,
	loaithietbi varchar(20),
	hedieuhanh varchar(10),
	trinhduyet varchar(30),
	CONSTRAINT pk_thiet_bi PRIMARY KEY (matk, tenthietbi),
	CONSTRAINT fk_thietbi_taikhoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS THIET_BI

SELECT * FROM THIET_BI

TRUNCATE TABLE THIET_BI;

DROP TABLE THIET_BI;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE LS_NAP_TIEN
(
	matk int NOT NULL,
	ngay date NOT NULL, -- defalut format "yyyy-mm-dd"
	gio time NOT NULL, -- default format "hh:mm:ss"
	sotien money NOT NULL,
	noidung varchar(100) NOT NULL,
	nganhang varchar(20) NOT NULL,
	sodu money NOT NULL DEFAULT 0,
	CONSTRAINT pk_ls_nap_tien PRIMARY KEY (matk, ngay, gio),
	CONSTRAINT fk_ls_nap_tien_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS LS_NAP_TIEN

SELECT * FROM LS_NAP_TIEN

TRUNCATE TABLE LS_NAP_TIEN;

DROP TABLE LS_NAP_TIEN;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE LS_THANH_TOAN
(
	matk int NOT NULL,
	ngay date NOT NULL, -- defalut format "yyyy-mm-dd"
	gio time NOT NULL, -- default format "hh:mm:ss"
	sotien money NOT NULL,
	noidung varchar(100) NOT NULL,
	den varchar(50) NOT NULL,
	sotk int NOT NULL,
	CONSTRAINT pk_ls_thanh_toan PRIMARY KEY (matk, ngay, gio),
	CONSTRAINT fk_ls_thanh_toan_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk),
	CONSTRAINT fk_ls_thanh_toan_to_tai_khoan_den FOREIGN KEY (sotk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS LS_THANH_TOAN

SELECT * FROM LS_THANH_TOAN

TRUNCATE TABLE LS_THANH_TOAN;

DROP TABLE LS_THANH_TOAN;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE LS_DANG_NHAP
(
	matk int NOT NULL,
	ngay date NOT NULL, -- defalut format "yyyy-mm-dd"
	gio time NOT NULL, -- default format "hh:mm:ss"
	tenthietbi varchar(30) NOT NULL,
	tkdangnhap varchar(20) NOT NULL,
	thoigian smallint NOT NULL, -- default unit "minute"
	CONSTRAINT pk_ls_dang_nhap PRIMARY KEY (matk, ngay, gio),
	CONSTRAINT fk_ls_dang_nhap_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk),
	CONSTRAINT fk_ls_dang_nhap_to_thiet_bi FOREIGN KEY (matk, tenthietbi) REFERENCES THIET_BI(matk, tenthietbi)
);

ALTER TABLE IF EXISTS LS_DANG_NHAP

SELECT * FROM LS_DANG_NHAP

TRUNCATE TABLE LS_DANG_NHAP;

DROP TABLE LS_DANG_NHAP;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE TIN_DANG
(
	matk int NOT NULL,
	tieude varchar(255) NOT NULL,
	gia money NOT NULL,
	ngay date NOT NULL, -- defalut format "yyyy-mm-dd"
	loainha varchar(10) NOT NULL,
	loaihinh varchar(10) NOT NULL,
	diachi varchar(200) NOT NULL,
	dientich smallint NOT NULL, -- default unit "M^2"
	phongngu smallint NOT NULL, -- default unit "Phòng"
	nhavesinh smallint NOT NULL, -- default unit "Phòng"
	mota text,
	tenlienhe varchar(50) NOT NULL,
	sdt varchar(15) NOT NULL,
	email varchar(100) NOT NULL,
	hinhanh bytea NOT NULL,
	CONSTRAINT pk_tin_dang PRIMARY KEY(matk, tieude),
	CONSTRAINT fk_tin_dang_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk)
);

ALTER TABLE IF EXISTS TIN_DANG

SELECT * FROM TIN_DANG

TRUNCATE TABLE TIN_DANG;

DROP TABLE TIN_DANG;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE HOA_DON
(
	matk int NOT NULL,
	tieude varchar(255) NOT NULL,
	ngay date NOT NULL, -- defalut format "yyyy-mm-dd"
	gio time NOT NULL, -- default format "hh:mm:ss"
	tenkh varchar(50) NOT NULL,
	sdt varchar(15) NOT NULL,
	CONSTRAINT pk_hoa_don PRIMARY KEY(matk, tieude),
	CONSTRAINT fk_hoa_don_to_tai_khoan FOREIGN KEY (matk) REFERENCES TAI_KHOAN(matk),
	CONSTRAINT fk_hoa_don_to_tin_dang FOREIGN KEY (matk, tieude) REFERENCES TIN_DANG(matk, tieude),
	CONSTRAINT fk_hoa_don_to_lien_he FOREIGN KEY (matk, sdt) REFERENCES LIEN_HE(matk, sdt)
);

ALTER TABLE IF EXISTS HOA_DON

SELECT * FROM HOA_DON

TRUNCATE TABLE HOA_DON;

DROP TABLE HOA_DON;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------- FUNCTION -------------------------------------------------------------------------

--------------------------------------------------- Update `sodu` of `TAI_KHOAN` When Insert `LS_NAP_TIEN` --------------------------------------------------
CREATE OR REPLACE FUNCTION update_sodu_nap_tien()
RETURNS TRIGGER AS $$
DECLARE
    new_sodu MONEY;
BEGIN
    -- Update the sodu in TAI_KHOAN table
    UPDATE TAI_KHOAN
    SET sodu = sodu + NEW.sotien
    WHERE matk = NEW.matk
    RETURNING sodu INTO new_sodu;

    -- Update the sodu in LS_NAP_TIEN table
    UPDATE LS_NAP_TIEN
    SET sodu = new_sodu
    WHERE matk = NEW.matk AND ngay = NEW.ngay AND gio = NEW.gio;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS update_sodu_nap_tien;

---------------------------------------------------- Update `sodu` of `TAI_KHOAN` When Insert `TIN_DANG` ---------------------------------------------------
CREATE OR REPLACE FUNCTION update_sodu_tin_dang()
RETURNS TRIGGER AS $$
DECLARE
    loai_tk VARCHAR(10);
    money_for_post MONEY;
BEGIN
    -- Get the account type
    SELECT tenloai INTO loai_tk
    FROM LOAI_TK
    JOIN TAI_KHOAN ON LOAI_TK.maloai = TAI_KHOAN.loaitk
    WHERE TAI_KHOAN.matk = NEW.matk;
    
    -- Determine the amount of money for posting based on the account type
    IF loai_tk = 'new' THEN
        money_for_post := 100;
    ELSIF loai_tk = 'basic' THEN
        money_for_post := 80;
    ELSIF loai_tk = 'standard' THEN
        money_for_post := 55;
    ELSIF loai_tk = 'premium' THEN
        money_for_post := 20;
    ELSE
        money_for_post := 0;
    END IF;
    
    -- Check if the balance is sufficient
    IF (SELECT sodu FROM TAI_KHOAN WHERE matk = NEW.matk) >= money_for_post THEN
        -- Update the balance
        UPDATE TAI_KHOAN
        SET sodu = sodu - money_for_post
        WHERE matk = NEW.matk;
    ELSE
        RAISE EXCEPTION 'Insufficient balance';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS update_sodu_tin_dang;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------- TRIGGER --------------------------------------------------------------------------

--------------------------------------------------------- Call Function After Inserted `LS_NAP_TIEN` --------------------------------------------------------
CREATE TRIGGER trg_update_sodu_nap_tien
AFTER INSERT ON LS_NAP_TIEN
FOR EACH ROW
EXECUTE FUNCTION update_sodu_nap_tien();

DROP TRIGGER IF EXISTS trg_update_sodu_nap_tien ON LS_NAP_TIEN

----------------------------------------------------------- Call Function After Inserted `TIN_DANG` ---------------------------------------------------------
CREATE TRIGGER trg_update_sodu_tin_dang
AFTER INSERT ON TIN_DANG
FOR EACH ROW
EXECUTE FUNCTION update_sodu_tin_dang();

DROP TRIGGER IF EXISTS trg_update_sodu_tin_dang ON TIN_DANG

-------------------------------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------- PROCEDURE -------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Insert Values for Data Tables

INSERT INTO LOAI_TK(tenloai, qtv) VALUES
('admin', '1'),
('premium', '0'),
('standard', '0'),
('basic', '0'),
('new', '0');

INSERT INTO TAI_KHOAN(tendangnhap, tentk, sdt, email, diachi, gioithieu, cccd, msthue, gioitinh, ngaysinh, matkhau, loaitk) VALUES
('Minh admin', 'Minh admin', '0911936302', 'Minhadmin@example.com', 'Sa Dec, Dong Thap', 'IT lord', '087203001049', '000000000001', 'M', '2003-03-10', 'admin123', 1),
('Kiet admin', 'Kiet admin', '9999999999', 'Kietadmin@example.com', 'Thanh Binh, Dong Thap', 'IT lord', '000000000000', '000000000002', 'M', '2003-03-04', 'admin123', 1),
('user1', 'user1', '0987654321', 'user1@example.com', '123 Main St', 'I love tech.', '123456789012', '100200300400', 'M', '1990-01-01', 'password1', 3),
('user2', 'user2', '0987654322', 'user2@example.com', '456 Elm St', 'Avid traveler.', '123456789013', '100200300401', 'F', '1992-02-02', 'password2', 5),
('user3', 'user3', '0987654323', 'user3@example.com', '789 Oak St', 'Food enthusiast.', '123456789014', '100200300402', 'M', '1994-03-03', 'password3', 2),
('user4', 'user4', '0987654324', 'user4@example.com', '101 Pine St', 'Music lover.', '123456789015', '100200300403', 'F', '1996-04-04', 'password4', 4),
('user5', 'user5', '0987654325', 'user5@example.com', '202 Maple St', 'Fitness junkie.', '123456789016', '100200300404', 'M', '1998-05-05', 'password5', 2),
('Alice', 'Alice', '0987654326', 'alice@example.com', '2022 Maple St', 'Fitness junkie 1.', '123456789017', '100200300405', 'M', '1998-05-06', 'password6', 2),
('Bob', 'Bob', '0987654327', 'bob@example.com', '2023 Maple St', 'Fitness junkie 2.', '123456789018', '100200300406', 'M', '1998-05-07', 'password7', 4),
('Charlie', 'Charlie', '0987654328', 'charlie@example.com', '2024 Maple St', 'Fitness junkie 3.', '123456789019', '100200300407', 'M', '1998-05-08', 'password8', 2),
('Dave', 'Dave', '0987654329', 'dave@example.com', '2025 Maple St', 'Fitness junkie 4.', '123456789020', '100200300408', 'F', '1998-05-09', 'password9', 3),
('Eve', 'Eve', '0987654330', 'eve@example.com', '2026 Maple St', 'Fitness junkie 5.', '123456789021', '100200300409', 'M', '1998-05-10', 'password10', 2),
('Frank', 'Frank', '0987654331', 'frank@example.com', '2027 Maple St', 'Fitness junkie 6.', '123456789022', '100200300410', 'F', '1998-05-11', 'password11', 4),
('Grace', 'Grace', '0987654332', 'grace@example.com', '2028 Maple St', 'Fitness junkie 7.', '123456789023', '100200300411', 'F', '1998-05-12', 'password12', 2),
('Heidi', 'Heidi', '0987654333', 'heidi@example.com', '2029 Maple St', 'Fitness junkie 8.', '123456789024', '100200300412', 'F', '1998-05-13', 'password13', 5),
('Ivan', 'Ivan', '0987654334', 'ivan@example.com', '2030 Maple St', 'Fitness junkie 9.', '123456789025', '100200300413', 'M', '1998-05-14', 'password14', 4),
('Judy', 'Judy', '0987654335', 'judy@example.com', '2031 Maple St', 'Fitness junkie 10.', '123456789026', '100200300414', 'F', '1998-05-15', 'password15', 3),
('Mallory', 'Mallory', '0987654336', 'mallory@example.com', '2032 Maple St', 'Fitness junkie 11.', '123456789027', '100200300415', 'M', '1998-05-16', 'password16', 4),
('Niaj', 'Niaj', '0987654337', 'niaj@example.com', '2033 Maple St', 'Fitness junkie 12.', '123456789028', '100200300416', 'M', '1998-05-17', 'password17', 5),
('Olivia', 'Olivia', '0987654338', 'olivia@example.com', '2034 Maple St', 'Fitness junkie 13.', '123456789029', '100200300417', 'M', '1998-05-18', 'password18', 2),
('Peggy', 'Peggy', '0987654339', 'peggy@example.com', '2035 Maple St', 'Fitness junkie 14.', '123456789030', '100200300418', 'F', '1998-05-19', 'password19', 2),
('Rupert', 'Rupert', '0987654340', 'rupert@example.com', '2036 Maple St', 'Fitness junkie 15.', '123456789031', '100200300419', 'F', '1998-05-20', 'password20', 3),
('Sybil', 'Sybil', '0987654341', 'sybil@example.com', '2037 Maple St', 'Fitness junkie 16.', '123456789032', '100200300420', 'F', '1998-05-21', 'password21', 4),
('Trent', 'Trent', '0987654342', 'trent@example.com', '2038 Maple St', 'Fitness junkie 17.', '123456789033', '100200300421', 'F', '1998-05-22', 'password22', 4),
('Victor', 'Victor', '0987654343', 'victor@example.com', '2039 Maple St', 'Fitness junkie 18.', '123456789034', '100200300422', 'M', '1998-05-23', 'password23', 5),
('Walter', 'Walter', '0987654344', 'walter@example.com', '2040 Maple St', 'Fitness junkie 19.', '123456789035', '100200300423', 'F', '1998-05-24', 'password24', 3),
('Xander', 'Xander', '0987654345', 'xander@example.com', '2041 Maple St', 'Fitness junkie 20.', '123456789036', '100200300424', 'M', '1998-05-25', 'password25', 3),
('Yvonne', 'Yvonne', '0987654346', 'yvonne@example.com', '2042 Maple St', 'Fitness junkie 21.', '123456789037', '100200300425', 'F', '1998-05-26', 'password26', 2),
('Zara', 'Zara', '0987654347', 'zara@example.com', '2043 Maple St', 'Fitness junkie 22.', '1234567890338', '100200300426', 'F', '1998-05-27', 'password27', 3),
('Abe', 'Abe', '0987654348', 'abe@example.com', '2044 Maple St', 'Fitness junkie 23.', '123456789039', '100200300427', 'F', '1998-05-28', 'password28', 5),
('Bea', 'Bea', '0987654349', 'bea@example.com', '2045 Maple St', 'Fitness junkie 24.', '123456789040', '100200300428', 'M', '1998-05-29', 'password29', 4),
('Cid', 'Cid', '0987654350', 'cid@example.com', '2046 Maple St', 'Fitness junkie 25.', '123456789041', '100200300429', 'M', '1998-05-30', 'password30', 5);

INSERT INTO LIEN_HE(matk, tenkh, sdt) VALUES
(3, 'Alice', '0987654326'),
(3, 'Bob', '0987654327'),
(3, 'Charlie', '0987654328'),
(3, 'Dave', '0987654329'),
(3, 'Eve', '0987654330'),
(4, 'Frank', '0987654331'),
(4, 'Grace', '0987654332'),
(4, 'Heidi', '0987654333'),
(4, 'Ivan', '0987654334'),
(4, 'Judy', '0987654335'),
(5, 'Mallory', '0987654336'),
(5, 'Niaj', '0987654337'),
(5, 'Olivia', '0987654338'),
(5, 'Peggy', '0987654339'),
(5, 'Rupert', '0987654340'),
(6, 'Sybil', '0987654341'),
(6, 'Trent', '0987654342'),
(6, 'Victor', '0987654343'),
(6, 'Walter', '0987654344'),
(6, 'Xander', '0987654345'),
(7, 'Yvonne', '0987654346'),
(7, 'Zara', '0987654347'),
(7, 'Abe', '0987654348'),
(7, 'Bea', '0987654349'),
(7, 'Cid', '0987654350');

INSERT INTO LIEN_KET(matk, mxh) VALUES
(3, 'Facebook'),
(3, 'Instagram'),
(3, 'Twitter'),
(3, 'LinkedIn'),
(3, 'Snapchat'),
(4, 'Facebook'),
(4, 'Instagram'),
(4, 'Twitter'),
(4, 'LinkedIn'),
(4, 'Snapchat'),
(5, 'Facebook'),
(5, 'Instagram'),
(5, 'Twitter'),
(5, 'LinkedIn'),
(5, 'Snapchat'),
(6, 'Facebook'),
(6, 'Instagram'),
(6, 'Twitter'),
(6, 'LinkedIn'),
(6, 'Snapchat'),
(7, 'Facebook'),
(7, 'Instagram'),
(7, 'Twitter'),
(7, 'LinkedIn'),
(7, 'Snapchat');

INSERT INTO THIET_BI(matk, tenthietbi, loaithietbi, hedieuhanh, trinhduyet) VALUES
(3, 'iPhone 13', 'smart phone', 'iOS', 'Safari'),
(3, 'MacBook Pro', 'laptop', 'MacOS', 'Chrome'),
(3, 'iPad Air', 'tablet', 'iOS', 'Safari'),
(3, 'iMac', 'personal computer', 'MacOS', 'Chrome'),
(3, 'Apple Watch', 'smart phone', 'iOS', 'Safari'),
(4, 'Galaxy S21', 'smart phone', 'Android', 'Chrome'),
(4, 'Surface Pro', 'laptop', 'Windows', 'Edge'),
(4, 'Galaxy Tab', 'tablet', 'Android', 'Chrome'),
(4, 'Dell XPS', 'personal computer', 'Windows', 'Firefox'),
(4, 'OnePlus 9', 'smart phone', 'Android', 'Chrome'),
(5, 'Pixel 6', 'smart phone', 'Android', 'Chrome'),
(5, 'Chromebook', 'laptop', 'ChromeOS', 'Chrome'),
(5, 'Nexus 7', 'tablet', 'Android', 'Chrome'),
(5, 'HP Spectre', 'personal computer', 'Windows', 'Edge'),
(5, 'Pixelbook Go', 'laptop', 'ChromeOS', 'Chrome'),
(6, 'iPhone SE', 'smart phone', 'iOS', 'Safari'),
(6, 'Mac Mini', 'personal computer', 'MacOS', 'Safari'),
(6, 'iPad Mini', 'tablet', 'iOS', 'Safari'),
(6, 'Apple TV', 'personal computer', 'iOS', 'Safari'),
(6, 'iPhone 12', 'smart phone', 'iOS', 'Safari'),
(7, 'Xiaomi Mi 11', 'smart phone', 'Android', 'Chrome'),
(7, 'Lenovo ThinkPad', 'laptop', 'Windows', 'Edge'),
(7, 'Huawei MatePad', 'tablet', 'Android', 'Chrome'),
(7, 'Acer Predator', 'personal computer', 'Windows', 'Firefox'),
(7, 'Sony Xperia', 'smart phone', 'Android', 'Chrome');

INSERT INTO LS_NAP_TIEN(matk, ngay, gio, sotien, noidung, nganhang) VALUES
(3, '2023-01-01', '09:00:00', 1000.00, 'Salary', 'Bank A'),
(3, '2023-01-02', '10:00:00', 500.00, 'Freelance Payment', 'Bank B'),
(3, '2023-01-03', '11:00:00', 300.00, 'Gift', 'Bank C'),
(3, '2023-01-04', '12:00:00', 700.00, 'Bonus', 'Bank D'),
(3, '2023-01-05', '13:00:00', 900.00, 'Refund', 'Bank E'),
(4, '2023-01-06', '14:00:00', 1100.00, 'Salary', 'Bank A'),
(4, '2023-01-07', '15:00:00', 600.00, 'Freelance Payment', 'Bank B'),
(4, '2023-01-08', '16:00:00', 400.00, 'Gift', 'Bank C'),
(4, '2023-01-09', '17:00:00', 800.00, 'Bonus', 'Bank D'),
(4, '2023-01-10', '18:00:00', 1000.00, 'Refund', 'Bank E'),
(5, '2023-01-11', '19:00:00', 1200.00, 'Salary', 'Bank A'),
(5, '2023-01-12', '20:00:00', 700.00, 'Freelance Payment', 'Bank B'),
(5, '2023-01-13', '21:00:00', 500.00, 'Gift', 'Bank C'),
(5, '2023-01-14', '22:00:00', 900.00, 'Bonus', 'Bank D'),
(5, '2023-01-15', '23:00:00', 1100.00, 'Refund', 'Bank E'),
(6, '2023-01-16', '08:00:00', 1300.00, 'Salary', 'Bank A'),
(6, '2023-01-17', '07:00:00', 800.00, 'Freelance Payment', 'Bank B'),
(6, '2023-01-18', '06:00:00', 600.00, 'Gift', 'Bank C'),
(6, '2023-01-19', '05:00:00', 1000.00, 'Bonus', 'Bank D'),
(6, '2023-01-20', '04:00:00', 1200.00, 'Refund', 'Bank E'),
(7, '2023-01-21', '03:00:00', 1400.00, 'Salary', 'Bank A'),
(7, '2023-01-22', '02:00:00', 900.00, 'Freelance Payment', 'Bank B'),
(7, '2023-01-23', '01:00:00', 700.00, 'Gift', 'Bank C'),
(7, '2023-01-24', '00:00:00', 1100.00, 'Bonus', 'Bank D'),
(7, '2023-01-25', '23:00:00', 1300.00, 'Refund', 'Bank E');

INSERT INTO LS_THANH_TOAN(matk, ngay, gio, sotien, noidung, den, sotk) VALUES
(3, '2023-01-01', '09:00:00', 100.00, 'Payment for groceries', 'Alice', 8),
(3, '2023-01-02', '10:00:00', 50.00, 'Coffee with friends', 'Bob', 9),
(3, '2023-01-03', '11:00:00', 200.00, 'Online shopping', 'Charlie', 10),
(3, '2023-01-04', '12:00:00', 150.00, 'Dinner', 'Dave', 11),
(3, '2023-01-05', '13:00:00', 80.00, 'Movie tickets', 'Eve', 12),
(4, '2023-01-06', '14:00:00', 100.00, 'Payment for groceries', 'Frank', 13),
(4, '2023-01-07', '15:00:00', 50.00, 'Coffee with friends', 'Grace', 14),
(4, '2023-01-08', '16:00:00', 200.00, 'Online shopping', 'Heidi', 15),
(4, '2023-01-09', '17:00:00', 150.00, 'Dinner', 'Ivan', 16),
(4, '2023-01-10', '18:00:00', 80.00, 'Movie tickets', 'Judy', 17),
(5, '2023-01-11', '19:00:00', 100.00, 'Payment for groceries', 'Mallory', 18),
(5, '2023-01-12', '20:00:00', 50.00, 'Coffee with friends', 'Niaj', 19),
(5, '2023-01-13', '21:00:00', 200.00, 'Online shopping', 'Olivia', 20),
(5, '2023-01-14', '22:00:00', 150.00, 'Dinner', 'Peggy', 21),
(5, '2023-01-15', '23:00:00', 80.00, 'Movie tickets', 'Rubert', 22),
(6, '2023-01-16', '08:00:00', 100.00, 'Payment for groceries', 'Sybil', 23),
(6, '2023-01-17', '07:00:00', 50.00, 'Coffee with friends', 'Trent', 24),
(6, '2023-01-18', '06:00:00', 200.00, 'Online shopping', 'Victor', 25),
(6, '2023-01-19', '05:00:00', 150.00, 'Dinner', 'Walter', 26),
(6, '2023-01-20', '04:00:00', 80.00, 'Movie tickets', 'Xander', 27),
(7, '2023-01-21', '03:00:00', 100.00, 'Payment for groceries', 'Yvonne', 28),
(7, '2023-01-22', '02:00:00', 50.00, 'Coffee with friends', 'Zara', 29),
(7, '2023-01-23', '01:00:00', 200.00, 'Online shopping', 'Abe', 30),
(7, '2023-01-24', '00:00:00', 150.00, 'Dinner', 'Bea', 31),
(7, '2023-01-25', '23:00:00', 80.00, 'Movie tickets', 'Cid', 32);

INSERT INTO LS_DANG_NHAP(matk, ngay, gio, tenthietbi, tkdangnhap, thoigian) VALUES
(3, '2023-01-01', '09:00:00', 'iPhone 13', 'WTL', 30),
(3, '2023-01-02', '10:00:00', 'MacBook Pro', 'fb', 45),
(3, '2023-01-03', '11:00:00', 'iPad Air', 'gg', 60),
(3, '2023-01-04', '12:00:00', 'iMac', 'WTL', 30),
(3, '2023-01-05', '13:00:00', 'Apple Watch', 'fb', 45),
(4, '2023-01-06', '14:00:00', 'Galaxy S21', 'gg', 60),
(4, '2023-01-07', '15:00:00', 'Surface Pro', 'WTL', 30),
(4, '2023-01-08', '16:00:00', 'Galaxy Tab', 'fb', 45),
(4, '2023-01-09', '17:00:00', 'Dell XPS', 'gg', 60),
(4, '2023-01-10', '18:00:00', 'OnePlus 9', 'WTL', 30),
(5, '2023-01-11', '19:00:00', 'Pixel 6', 'fb', 45),
(5, '2023-01-12', '20:00:00', 'Chromebook', 'gg', 60),
(5, '2023-01-13', '21:00:00', 'Nexus 7', 'WTL', 30),
(5, '2023-01-14', '22:00:00', 'HP Spectre', 'fb', 45),
(5, '2023-01-15', '23:00:00', 'Pixelbook Go', 'gg', 60),
(6, '2023-01-16', '08:00:00', 'iPhone SE', 'WTL', 30),
(6, '2023-01-17', '07:00:00', 'Mac Mini', 'fb', 45),
(6, '2023-01-18', '06:00:00', 'iPad Mini', 'gg', 60),
(6, '2023-01-19', '05:00:00', 'Apple TV', 'WTL', 30),
(6, '2023-01-20', '04:00:00', 'iPhone 12', 'fb', 45),
(7, '2023-01-21', '03:00:00', 'Xiaomi Mi 11', 'gg', 60),
(7, '2023-01-22', '02:00:00', 'Lenovo ThinkPad', 'WTL', 30),
(7, '2023-01-23', '01:00:00', 'Huawei MatePad', 'fb', 45),
(7, '2023-01-24', '00:00:00', 'Acer Predator', 'gg', 60),
(7, '2023-01-25', '23:00:00', 'Sony Xperia', 'WTL', 30);

INSERT INTO TIN_DANG(matk, tieude, gia, ngay, loainha, loaihinh, diachi, dientich, phongngu, nhavesinh, mota, tenlienhe, sdt, email, hinhanh) VALUES
(3, 'Beautiful House for Sale', 500000000.00, '2023-01-01', 'Nha pho', 'Ban', '123 Main St', 100, 3, 2, 'A beautiful house in the city center.', 'user1', '0987654321', 'user1@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(3, 'Spacious Room for Rent', 10000000.00, '2023-01-02', 'Phong', 'Cho thue', '456 Elm St', 30, 1, 1, 'A spacious room near the park.', 'user1', '0987654321', 'user1@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(3, 'Cozy Apartment for Sale', 300000000.00, '2023-01-03', 'Nha pho', 'Ban', '789 Oak St', 80, 2, 1, 'A cozy apartment with modern amenities.', 'user1', '0987654321', 'user1@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(3, 'Luxury Villa for Rent', 20000000.00, '2023-01-04', 'Nha pho', 'Cho thue', '101 Pine St', 150, 4, 3, 'A luxury villa with a swimming pool.', 'user1', '0987654321', 'user1@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(3, 'Modern Studio for Sale', 200000000.00, '2023-01-05', 'Phong', 'Ban', '202 Cedar St', 50, 1, 1, 'A modern studio in a prime location.', 'user1', '0987654321', 'user1@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(4, 'Charming Cottage for Sale', 400000000.00, '2023-01-06', 'Nha pho', 'Ban', '303 Birch St', 120, 3, 2, 'A charming cottage with a garden.', 'user2', '0987654322', 'user2@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(4, 'Downtown Office for Rent', 50000000.00, '2023-01-07', 'Phong', 'Cho thue', '404 Spruce St', 200, 0, 2, 'An office space in downtown.', 'user2', '0987654322', 'user2@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(4, 'Beachfront Property for Sale', 800000000.00, '2023-01-08', 'Nha pho', 'Ban', '505 Palm St', 300, 5, 4, 'A beachfront property with stunning views.', 'user2', '0987654322', 'user2@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(4, 'Suburban Home for Rent', 15000000.00, '2023-01-09', 'Nha pho', 'Cho thue', '606 Maple St', 90, 2, 2, 'A suburban home with a backyard.', 'user2', '0987654322', 'user2@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(4, 'Penthouse for Sale', 1000000000.00, '2023-01-10', 'Phong', 'Ban', '707 Willow St', 250, 3, 3, 'A luxury penthouse with panoramic views.', 'user2', '0987654322', 'user2@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(5, 'City Center Apartment for Rent', 20000000.00, '2023-01-11', 'Phong', 'Cho thue', '808 Ash St', 70, 1, 1, 'An apartment in the city center.', 'user3', '0987654323', 'user3@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(5, 'Country House for Sale', 600000000.00, '2023-01-12', 'Nha pho', 'Ban', '909 Oak St', 180, 4, 3, 'A country house with a large yard.', 'user3', '0987654323', 'user3@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(5, 'Luxury Apartment for Rent', 30000000.00, '2023-01-13', 'Phong', 'Cho thue', '1010 Fir St', 100, 2, 2, 'A luxury apartment with amenities.', 'user3', '0987654323', 'user3@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(5, 'Townhouse for Sale', 700000000.00, '2023-01-14', 'Nha pho', 'Ban', '1111 Elm St', 140, 3, 2, 'A townhouse in a quiet neighborhood.', 'user3', '0987654323', 'user3@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(5, 'Studio Apartment for Rent', 15000000.00, '2023-01-15', 'Phong', 'Cho thue', '1212 Maple St', 40, 1, 1, 'A studio apartment near the university.', 'user3', '0987654323', 'user3@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(6, 'Family House for Sale', 550000000.00, '2023-01-16', 'Nha pho', 'Ban', '1313 Oak St', 130, 4, 3, 'A family house with a garden.', 'user4', '0987654324', 'user4@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(6, 'Commercial Space for Rent', 25000000.00, '2023-01-17', 'Phong', 'Cho thue', '1414 Spruce St', 180, 0, 3, 'A commercial space in a busy area.', 'user4', '0987654324', 'user4@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(6, 'Vacation Home for Sale', 650000000.00, '2023-01-18', 'Nha pho', 'Ban', '1515 Birch St', 200, 5, 4, 'A vacation home near the beach.', 'user4', '0987654324', 'user4@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(6, 'Shared Room for Rent', 5000000.00, '2023-01-19', 'Phong', 'Cho thue', '1616 Palm St', 25, 1, 1, 'A shared room in a student area.', 'user4', '0987654324', 'user4@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(6, 'Executive Office for Rent', 60000000.00, '2023-01-20', 'Phong', 'Cho thue', '1717 Pine St', 220, 0, 4, 'An executive office in a prime location.', 'user4', '0987654324', 'user4@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(7, 'Lake House for Sale', 850000000.00, '2023-01-21', 'Nha pho', 'Ban', '1818 Willow St', 240, 5, 4, 'A lake house with a dock.', 'user5', '0987654325', 'user5@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(7, 'Downtown Condo for Rent', 35000000.00, '2023-01-22', 'Phong', 'Cho thue', '1919 Ash St', 120, 2, 2, 'A downtown condo with amenities.', 'user5', '0987654325', 'user5@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(7, 'Suburban House for Sale', 450000000.00, '2023-01-23', 'Nha pho', 'Ban', '2020 Elm St', 150, 3, 2, 'A suburban house with a garage.', 'user5', '0987654325', 'user5@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(7, 'Office Space for Rent', 45000000.00, '2023-01-24', 'Phong', 'Cho thue', '2121 Maple St', 200, 0, 3, 'An office space in a business district.', 'user5', '0987654325', 'user5@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64')),
(7, 'Luxury Penthouse for Sale', 1200000000.00, '2023-01-25', 'Phong', 'Ban', '2222 Pine St', 300, 4, 3, 'A luxury penthouse with a rooftop garden.', 'user5', '0987654325', 'user5@example.com', decode('iVBORw0KGgoAAAANSUhEUgAAAAUA', 'base64'));

INSERT INTO HOA_DON(matk, tieude, ngay, gio, tenkh, sdt) VALUES
(3, 'Beautiful House for Sale', '2024-07-15', '10:30:00', 'Alice', '0987654326'),
(3, 'Spacious Room for Rent', '2024-07-16', '11:45:00', 'Bob', '0987654327'),
(3, 'Cozy Apartment for Sale', '2024-07-17', '09:15:00', 'Charlie', '0987654328'),
(3, 'Luxury Villa for Rent', '2024-07-18', '14:00:00', 'Dave', '0987654329'),
(3, 'Modern Studio for Sale', '2024-07-19', '16:30:00', 'Eve', '0987654330'),
(4, 'Charming Cottage for Sale', '2024-07-20', '10:00:00', 'Frank', '0987654331'),
(4, 'Downtown Office for Rent', '2024-07-21', '11:00:00', 'Grace', '0987654332'),
(4, 'Beachfront Property for Sale', '2024-07-22', '12:00:00', 'Heidi', '0987654333'),
(4, 'Suburban Home for Rent', '2024-07-23', '13:00:00', 'Ivan', '0987654334'),
(4, 'Penthouse for Sale', '2024-07-24', '14:00:00', 'Judy', '0987654335'),
(5, 'City Center Apartment for Rent', '2024-07-25', '15:00:00', 'Mallory', '0987654336'),
(5, 'Country House for Sale', '2024-07-26', '16:00:00', 'Niaj', '0987654337'),
(5, 'Luxury Apartment for Rent', '2024-07-27', '17:00:00', 'Olivia', '0987654338'),
(5, 'Townhouse for Sale', '2024-07-28', '18:00:00', 'Peggy', '0987654339'),
(5, 'Studio Apartment for Rent', '2024-07-29', '19:00:00', 'Rupert', '0987654340'),
(6, 'Family House for Sale', '2024-07-30', '20:00:00', 'Sybil', '0987654341'),
(6, 'Commercial Space for Rent', '2024-07-31', '21:00:00', 'Trent', '0987654342'),
(6, 'Vacation Home for Sale', '2024-08-01', '22:00:00', 'Victor', '0987654343'),
(6, 'Shared Room for Rent', '2024-08-02', '23:00:00', 'Walter', '0987654344'),
(6, 'Executive Office for Rent', '2024-08-03', '00:00:00', 'Xander', '0987654345'),
(7, 'Lake House for Sale', '2024-08-04', '01:00:00', 'Yvonne', '0987654346'),
(7, 'Downtown Condo for Rent', '2024-08-05', '02:00:00', 'Zara', '0987654347'),
(7, 'Suburban House for Sale', '2024-08-06', '03:00:00', 'Abe', '0987654348'),
(7, 'Office Space for Rent', '2024-08-07', '04:00:00', 'Bea', '0987654349'),
(7, 'Luxury Penthouse for Sale', '2024-08-08', '05:00:00', 'Cid', '0987654350');
