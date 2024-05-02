let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'منور'
            },
            body: {
              text: '*༺═━━═⊱╊⊰🐤⊱╉⊰═━━═༻*                       *『😈┇اهلا بـك فـي قـائـمـة الاقـسـام┇😈』*                           *✠ ━━ • ━ ‹✤› ━ • ━━ ✠ *                           *『🤖┇مـعـلـومـات الـبـوت┇🤖』*                               *✠ ━━ • ━ ‹✤› ━ • ━━ ✠*                            *【🥱┇الـمـنـصـة ⟣ هـيـروكـو】*                                       *【🤦🏻‍♂️┇قـبـل الامـر ⟣ . 】*                         *【👽┇عـدد الاوامر ⟣ +300 】*                             *【🌟┇البوت لسه تحت التطوير ف ما تستعجل 】*                       *【 💔┇احبكم وشكرا 🐦💔 】*                       ༺━─━─╃⌬〔🐤〕⌬╄─━─━༻*                         > *BY┇ZEZO BOT*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'زيزو',
                        rows: [
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: 'القايمه', 
                                title: 'القايمه', 
                                description: '', 
                                id: '.القايمه', 
                         } 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامر']

export default handler
