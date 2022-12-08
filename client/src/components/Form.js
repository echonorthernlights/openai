import { useState } from 'react';
import ShowImage from './ShowImage';

const Form = () => {
    const [form, setForm] = useState({ prompt: '', size: '' });
    const [link, setLink] = useState('');
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({ ...form, [name]: value });
    }

    const generateImage = async () => {
        const data = await fetch('http://localhost:5000/openai/generateImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const link = await data.json();
        if (link) {
            setLink(link)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await generateImage();
        setForm({ prompt: '', size: '' });

    }
    return (
        <>
            <>
                <section className="showcase">
                    <form id="image-form" onSubmit={onSubmit}>
                        <h1>Describe An Image</h1>
                        <div className="form-control">
                            <input type="text" name="prompt" placeholder="Enter Text" value={form.prompt} onChange={onChange} />
                        </div>
                        <div className="form-control">
                            <select name="size" id="size" value={form.size} onChange={onChange}>
                                <option value="small">Small</option>
                                <option value="medium" >Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <button type="submit" className="btn">Generate</button>
                    </form>
                </section>
                <ShowImage link={link} />
                <div className="spinner"></div>
            </>

        </>
    )
}

export default Form