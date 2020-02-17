import { getSQLInfo } from "./secure.js";
const Sequelize = require('sequelize');

const data = getSQLInfo();
/*
  You need to make getSQLInfo() for connect your sql.

  --getSQLInfo() Sample--
  export const getSQLInfo = function () {
    const data = {
      name: 'your DB',
      id: 'your root',
      pw: 'your pw'
    };

    return data;
  };
  -----------------------
*/

const sequelize = new Sequelize(data.name, data.id, data.pw, {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Post = sequelize.define('Post', {
  idPost: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  postId: {
    type: Sequelize.STRING,
    allowNull: true
  },
  postPw: {
    type: Sequelize.STRING,
    allowNull: true
  },
  postNick: {
    type: Sequelize.STRING,
    allowNull: true
  },
  postTitle: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  postContents: {
    type: Sequelize.TEXT,
    allowNull: true
  }
},{
  modelName: 'Post'
});

sequelize.sync();

export const getPostData = async () => {
  return Post.findAll();
};

export const createPostData = async (data) => {
  Post.create({ idPost: 0, postId: data.postId, postPw: data.postPw, postNick: data.postNick, postTitle: data.postTitle, postContents: data.postContents });
  console.log('create work');
};

export const deletePostData = async (idPost) => {
  Post.destroy({
    where: {
      idPost: idPost
    }
  });
  console.log("Delete Done");
};

export const updataPostData = async (idPost, title, contents) => {
  Post.update({ postTitle: title, postContents: contents }, {
    where: {
      idPost: idPost
    }
  });
  console.log("update Done");
};

export const checkPWPostData = async (idPost) => {
  return Post.findOne({
    attributes: ['postPw'],
    where: {
      idPost: idPost
    }
  });
};