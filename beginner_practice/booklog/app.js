//expressの呼び出し
const express= require('express')
const app = express()
//port番号の指定
const port =3001

//let:変数, const:定数
//本当は配列が望ましいが、簡単のためにobjetの１変数にした
let booklog={}

//jsonを使えるようにする
app.use(express.json())
//読書ログの追加
app.post('/booklog',(req,res)=>{
    booklog = req.body
    //通信失敗の場合
    if(!(booklog.name && booklog.text)){
        return res.json({
            "ok":false, //通信確認結果
            "error":"invalid parameter"
        })
    }
    //通信成功の場合
    res.json({
        "ok":true, //通信確認結果
        "booklog":booklog //リクエストのbody
    })
})

//ログ一覧の取得
app.get("/booklog",(req,res)=>{
    res.json({
        "ok":true,
        "booklog":[
            booklog
        ]
    })
})

//常に起動させておく
//起動していると"App listening ..."を表示させる無名関数を実行
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

//読書ログを記録

