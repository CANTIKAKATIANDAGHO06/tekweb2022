## API POINTS
Adapun api point yang saya buat di antaranya:
1. User
2. Articles
3. About

Dari ke 3 design api ini nantinya akan terdapat masing-masing fungsi yang akan dibuat untuk membuat suatu controller agar api dapat berjalan
berikut adalah penjelasannya 

### User
1 getAllUser()

pada getAllUser merupakan fungsi untuk menggambil semua data user dari api yang saya buat

```    
GET: /user

response:
[
    {
        "id"                : "",
        "nama"              : "",
        "link_ig"           : "",
        "link_github"       : "",
        "link_youtube"      : "",
        "desc"              : ""
    }
    ...
]
```

2 getUserById()

pada getUserById sendiri merupakan fungsi yang digunakan untuk mengambil data dari api berdasarkan `id`

```
GET: /user[id]

response:
{
    "id"                : "",
    "nama"              : "",
    "link_ig"           : "",
    "link_github"       : "",
    "link_youtube"      : "",
    "desc"              : ""
}
```

#### createUser()


#### updateUser()


#### deleteUser()


### Articles


#### getAllArticle


#### getArticleById


#### createArticle


#### updateArticle


#### deleteArticle


### About
