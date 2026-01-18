import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-primary text-white border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <h3 className="text-2xl font-orbitron font-bold mb-4">HYDRA</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                The future of spatial computing is here. Experience reality redefined.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-accent">Product</h4>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">Tech Specs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pre-Order</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-accent">Company</h4>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-accent">Support</h4>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-secondary mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Hydra Inc. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-secondary hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-secondary hover:text-white transition-colors">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer