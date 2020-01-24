import { getSQLInfo } from "./secure.js";
const Sequelize = require('sequelize');

const data = getSQLInfo();

// Option 1: Passing parameters separately
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
  ID: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  PW: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Nick: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Title: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  Contents: {
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
  Post.create({ ID: data.id, PW: data.pw, Nick: data.nick, Title: data.title, Contents: data.contents });
  console.log('create work');
};

export const deletePostData = async (id) => {
  Post.destroy({
    where: {
      ID: id
    }
  });
  console.log("Delete Done");
};

export const updataPostData = async (data) => {
  Post.update({ Title: data.title, Contents: data.contents }, {
    where: {
      ID: data.id
    }
  });
  console.log("update Done");
};