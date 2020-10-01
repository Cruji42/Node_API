import { Router, Request, Response} from 'express';

export const router = Router();

router.get('/users',(req: Request, res: Response)=>{

    res.json({
        success : true,
        name: "Sharky GET"
    })
});

router.post('/users',(req: Request, res: Response)=>{

    const  api_key = req.body.api_key;
    const  token = req.body.token;

    res.json({
        success : true,
        name: "Sharky POST",
        api_key,
        token
    })

});

router.post('/users/:id/:name/:last_name',(req: Request, res: Response)=>{

    const  api_key = req.body.api_key;
    const  token = req.body.token;
    const  id = req.params.id;
    const  name = req.params.name;
    const  last_name = req.params.last_name;

    res.json({
        success : true,
        username: "Sharky POST",
        api_key,
        token,
        id,
        name,
        last_name
    })

});