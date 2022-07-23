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

3 createUser()

createUser merupakan program untuk menmabahkan data user

```
POST: /user

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "nama"              : "",
    "link_ig"           : "",
    "link_github"       : "",
    "link_youtube"      : "",
    "desc"              : ""
}

response:
true    // if success
false   // if failure
```
4 updateUser()

updateUser sendiri merupakan program untuk mengubah data user

```
PUT: /user

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"                : "",
    "nama"              : "",
    "link_ig"           : "",
    "link_github"       : "",
    "link_youtube"      : "",
    "desc"              : ""
}

response:
true    // if success
false   // if failure
```
5 deleteUser()

deleteUser yaitu program untuk menghapus user

```
DELETE: /user/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```

### Articles
1 getAllArticle()

getAllArticle Merupakan program untuk menampilkan seluruh data article

```
GET: /articles

response:
[
    {
        "id"                : "",
        "thumbnail_url"     : "",
        "title"             : "",
        "desc"              : "",
        "article_url"       : ""
    }
    ...
]
```

2 getArticleById()

getArticleById merupakan program untuk menampilkan data berdasarkan `id`

```
GET: /articles/[id]

response:
{
    "id"                : "",
    "thumbnail_url"     : "",
    "title"             : "",
    "desc"              : "",
    "article_url"       : ""
}
```


3 createArticle()

createArticle merupakan fungsi untuk membuat data article

```
POST: /articles

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "thumbnail_url"     : "",
    "title"             : "",
    "desc"              : "",
    "article_url"       : ""
}

response:
true    // if success
false   // if failure
```

4 updateArticle()

updateArticle merupakan fungsi untuk mengubah data yang telah ada

```
PUT: /articles

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"                : "",
    "thumbnail_url"     : "",
    "title"             : "",
    "desc"              : "",
    "article_url"       : ""
}

response:
true    // if success
false   // if failure
```

5 deleteArticle()

deleteArticle adalah program untuk menghapus data article

```
DELETE: /article/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```

## Design Database

Design database ini merupakan desing untuk rancangan awal sebelum saya membuat api point
berikut adalah rancangannya:

```mermaid
calssDiagram
    class user{
        # id                : int
        + nama"             : string
        + link_ig           : string
        + link_github       : string
        + link_youtube      : string
        + desc              : string
    }
    class articles{
        # id                : int
        + thumbnail_url     : string
        + title             : string
        + desc              : string
        + article_url       : string
    }
```
