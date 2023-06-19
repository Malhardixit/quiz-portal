const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  multimediaUrl: {
    type: [{
      mediaDesc: {
        type: String,
        default: '',
      },
      mediaUrl: {
        type: String,
        default: '',
      },
      mediaCategory: {
        type: Number,
        default: 0,
      }, // 0 for image, 1 for video
    }],
    default: [],
  },
  questionOptions: {
    type: [{
      optionId: {
        type: String,
        required: true,
      },
      optionDesc: {
        type: String,
        required: true,
        default: '',
      },
      optionUrl: {
        type: String,
        required: true,
        default: '',
      }, // can contain images
    }],
  },
  correctAns: {
    type: String,
    required: true,
    default: '',
  }, // put option ID here
});

module.exports = {
  qaSchema,
};
