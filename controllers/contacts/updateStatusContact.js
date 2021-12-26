const { NotFound, CustomError } = require('http-errors')

const { Contact } = require('../../models')

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
  if (!result) {
    throw new NotFound(`Contacts with id=${contactId} not found`)
  }
  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  }
  throw new CustomError(400, 'missing field favorite')
}

module.exports = updateStatusContact
