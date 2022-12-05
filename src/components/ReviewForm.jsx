import React from "react"
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import "./ReviewForm.css"

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review_form">
            <div className="form_control score_container">
                <label className="radio_container">
                    <input
                        type="radio"
                        value='unsatisfied'
                        name='review'
                        required
                        checked={data.review === 'unsatisfied'}
                        on onChange={(e) => {
                            updateFieldHandler("review", e.target.value)
                        }} />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value='neutral'
                        name='review'
                        required
                        checked={data.review === 'neutral'}
                        on onChange={(e) => {
                            updateFieldHandler("review", e.target.value)
                        }} />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value='satisfied'
                        name='review'
                        required
                        checked={data.review === 'satisfied'}
                        on onChange={(e) => {
                            updateFieldHandler("review", e.target.value)
                        }} />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value='very_satisfied'
                        name='review'
                        required
                        checked={data.review === 'very_satisfied'}
                        on onChange={(e) => {
                            updateFieldHandler("review", e.target.value)
                        }} />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form_control">
                <label htmlFor="comment">Comentário: </label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Conte como foi sua experiência com nosso produto:"
                    required
                    value={data.comment || ''} on onChange={(e) => {
                        updateFieldHandler("comment", e.target.value)
                    }}
                ></textarea>
            </div>
        </div>
    )
}

export default ReviewForm