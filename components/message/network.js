const express = require ('express');
const response = require ('../../network/response')
const router = express.Router();
const controller = require('./controller')


router.get('/', (req,res) =>{
  controller.getMessages()
        .then((messageList) => {
            response.success( req, res, messageList, 200)
        })
        .catch( e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
})

router.post('/', (req,res) =>{

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage, 201)

    })
    .catch(e =>{
        response.error(req, res, 'Información invalida', 400, 'Error de logueo')

    })

})

module.exports = router

