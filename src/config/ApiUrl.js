let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
    getArticleList: ipUrl + 'getArticleList',  //  文章列表 
    addArticle: ipUrl + 'addArticle',  //  添加文章 
    getTypeInfo: ipUrl + 'getTypeInfo',  //  获得文章类别信息
    deleteArticle: ipUrl + 'delArticle/',  //  获得文章类别信息
    getArticleById: ipUrl + 'getArticleById/',  //  根据ID获得文章详情
    updateArticle: ipUrl + 'updateArticle',  //  根据ID获得文章详情
    getAllUser: ipUrl + 'getAllUser',
    getUsersByUsername: ipUrl + 'getUsersByUsername/',
    addUser: ipUrl + 'addUser/',
    editUser: ipUrl + 'editUser/',
    deleteUser: ipUrl + 'deleteUser/'
}
export default servicePath;