import React, { useState, useRef, useEffect } from 'react';

import Image from '../images/blacklogo.png';



function Donate() {

    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 100.00,
        descripttion: "donation for corona virus",
        img: "assets/fb.png"
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AbHIJkP9wZLOjgTPB1KbzBiqK7PYFyQHv--VjFQJ9n8JNwUtTTbFLSTVdWK2bnoGs6v7iqOG6wT-XrCj"

        script.addEventListener("load", () => setLoaded(true));

        document.body.appendChild(script);

        if (loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        descripttion: product.descripttion,
                                        amount: {
                                            currency_code: "USD",
                                            value: product.price
                                        }
                                    }
                                ]
                            });

                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();

                            setPaidFor(true);

                            console.log(order);
                            console.log(data);
                        },

                    })
                    .render(paypalRef);
            });
        }
    });


    return (
        <div className="App">
            {paidFor ? (
                <div style={{ padding: "20px" }}>
                    <h1>Thank you for your donation!</h1>
                    <img src={Image} alt='' width="500px" height="350px" />
                </div>
            ) : (
                    <div>
                        <h1>
                            {product.descripttion} for ${product.price}
                        </h1>

                        <div ref={v => (paypalRef = v)} id="format" />

                        <br></br>
                        <br></br>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="654H28S2UVASC" />

                            <br></br>
                            <br></br>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>


                    </div>

                )}
        </div>
    );
}

export default Donate;