import React from 'react'

const Avatar = () => {
    return (
        <div className="avatar-group -space-x-6 flex justify-start">
            <div className="avatar">
                <div className="w-17 rounded-full">
                    <img className="rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256" alt="User 1" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-17 rounded-full">
                    <img className="rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256" alt="User 2" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-17 rounded-full">
                    <img className="rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256" alt="User 3" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-17 rounded-full">
                    <img className="rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256" alt="User 4" />
                </div>
            </div>
        </div>
    )
}

export default Avatar