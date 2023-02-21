import './add.scss'

const Add = () => {
    return (
        <div className='add'>
            <div className="container">
                <h1>AddNew Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='e.g. I will do something i"m really good at' />
                        <label htmlFor="">Category</label>
                        <select name="category" id="category">
                            <option value="design">Design</option>
                            <option value="web">web development</option>
                            <option value="animation">Animation</option>
                            <option value="graphic">Graphic art</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Image</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea placeholder='Brief description to introduce your service to cumstomers'></textarea>
                        <button>Creat</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" placeholder='e.g. One-page web design' />
                        <label htmlFor="">Short Description</label>
                        <textarea name="">Short description of your service</textarea>
                        <label htmlFor="">Delivery Time(e.g. 3days)</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder='e.g. page design' />
                        <input type="text" placeholder='e.g. file upoloading' />
                        <input type="text" placeholder='e.g. setting up a domain' />
                        <input type="text" placeholder='e.g. hosting' />
                        <label htmlFor="">Price</label>
                        <input type="number" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;