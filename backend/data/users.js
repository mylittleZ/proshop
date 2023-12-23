import bcrypt from 'bcryptjs'

const users = [
    // 使用了 bcrypt 库来对密码进行加密。bcrypt 是一个用于密码哈希的流行库，它能够将明文密码转换成安全的哈希值
    // 10 是用于哈希的“盐轮数”（salt rounds）。盐轮数越高，生成的哈希就越安全，但同时也需要更多的处理时间。10 是一个常见的盐轮数，提供了一个在安全性和性能之间的平衡。
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;