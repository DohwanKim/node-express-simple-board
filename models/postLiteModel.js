const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db-dev.sqlite',
  operatorsAliases: Sequelize.Op,
  logging: console.log
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

Post.sync({ force: true });

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