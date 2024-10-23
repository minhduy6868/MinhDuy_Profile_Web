---
layout: '@/templates/BasePost.astro'
title: Mô hình MVC PHP Crud 
description: Demo bản crud với PHP dùng mô hình MVC 
pubDate: 2024-02-01T00:00:00Z
imgSrc: '/assets/images/phplogo.jpg'
imgAlt: 'Image post 7'
---
## Hướng dẫn mô hình MVC PHP Crud

Trước tiên, bạn cần tạo cấu trúc thư mục cho dự án của mình. Ví dụ:
### 1.Cấu trúc thư mục
```php
/mvc_crud/
    /app/
        /controllers/
            UserController.php
        /models/
            User.php
        /views/
            user/index.php
            user/create.php
            user/edit.php
    /public/
        index.php
    /config/
        database.php
```
### 2. Kết nối cơ sở dữ liệu
Tạo file database.php trong thư mục config/ để kết nối đến cơ sở dữ liệu:

```php
<?php
class Database {
    private $host = "localhost";
    private $db_name = "your_database";
    private $username = "your_username";
    private $password = "your_password";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host={$this->host};dbname={$this->db_name}", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
```
3. Tạo Model
Tạo file User.php trong thư mục models/:

```php
<?php
class User {
    private $conn;
    private $table_name = "users";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create($name, $email) {
        $query = "INSERT INTO " . $this->table_name . " (name, email) VALUES (:name, :email)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        return $stmt->execute();
    }

    public function read() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function update($id, $name, $email) {
        $query = "UPDATE " . $this->table_name . " SET name = :name, email = :email WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        return $stmt->execute();
    }

    public function delete($id) {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}
?>
```
### 4. Tạo Controller
Tạo file UserController.php trong thư mục controllers/:

```php
<?php
include_once '../config/database.php';
include_once '../models/User.php';

class UserController {
    private $user;

    public function __construct() {
        $database = new Database();
        $db = $database->getConnection();
        $this->user = new User($db);
    }

    public function index() {
        $stmt = $this->user->read();
        include '../views/user/index.php';
    }

    public function create() {
        if ($_POST) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $this->user->create($name, $email);
            header("Location: index.php");
        }
        include '../views/user/create.php';
    }

    public function edit($id) {
        if ($_POST) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $this->user->update($id, $name, $email);
            header("Location: index.php");
        }
        // Get user info for editing
        // ...
        include '../views/user/edit.php';
    }

    public function delete($id) {
        $this->user->delete($id);
        header("Location: index.php");
    }
}
?>
```
### 5. Tạo Views
Tạo index.php trong thư mục views/user/:
```php
<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
    <h1>User List</h1>
    <a href="create.php">Add User</a>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
        <tr>
            <td><?= $row['id'] ?></td>
            <td><?= $row['name'] ?></td>
            <td><?= $row['email'] ?></td>
            <td>
                <a href="edit.php?id=<?= $row['id'] ?>">Edit</a>
                <a href="delete.php?id=<?= $row['id'] ?>">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
```
##### Tạo create.php trong thư mục views/user/:
```php

<!DOCTYPE html>
<html>
<head>
    <title>Add User</title>
</head>
<body>
    <h1>Add User</h1>
    <form method="post">
        <label>Name:</label>
        <input type="text" name="name" required>
        <label>Email:</label>
        <input type="email" name="email" required>
        <input type="submit" value="Add User">
    </form>
</body>
</html>
```

##### Tạo edit.php trong thư mục views/user/:

```php
<!DOCTYPE html>
<html>
<head>
    <title>Edit User</title>
</head>
<body>
    <h1>Edit User</h1>
    <form method="post">
        <label>Name:</label>
        <input type="text" name="name" value="<?= $user['name'] ?>" required>
        <label>Email:</label>
        <input type="email" name="email" value="<?= $user['email'] ?>" required>
        <input type="submit" value="Update User">
    </form>
</body>
</html>
```
### 6. Tạo Entry Point
Cuối cùng, tạo file index.php trong thư mục public/:

```php
<?php
include '../controllers/UserController.php';

$controller = new UserController();
$action = $_GET['action'] ?? 'index';

switch ($action) {
    case 'create':
        $controller->create();
        break;
    case 'edit':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $controller->edit($id);
        }
        break;
    case 'delete':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $controller->delete($id);
        }
        break;
    default:
        $controller->index();
        break;
}
?>
```
### 7. Chạy ứng dụng
Bây giờ bạn có thể chạy ứng dụng CRUD của mình. Hãy chắc chắn rằng bạn đã cấu hình đúng thông tin cơ sở dữ liệu và tạo bảng users trong cơ sở dữ liệu của bạn.

#### Kết luận
Trên đây là hướng dẫn cơ bản để xây dựng một ứng dụng CRUD trong PHP theo mô hình MVC sử dụng OOP. Bạn có thể mở rộng và tùy chỉnh thêm các chức năng khác để phù hợp với yêu cầu của mình!


