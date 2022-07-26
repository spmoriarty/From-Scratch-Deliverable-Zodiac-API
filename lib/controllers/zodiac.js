const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');


const router = Router();

router
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(matchingZodiac);
  })

  .get('/', (req, res) => {
    const zodiacData = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name, symbol: zodiac.symbol, date: zodiac.dates }));
    res.json(zodiacData);
  })
;

module.exports = router;
