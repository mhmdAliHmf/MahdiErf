package com.example.charityapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import java.text.NumberFormat
import java.util.Locale

class PaymentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment)

        val amount = intent.getDoubleExtra("EXTRA_AMOUNT", 0.0)

        val amountTextView: TextView = findViewById(R.id.tv_payment_amount)
        val confirmButton: Button = findViewById(R.id.btn_confirm_payment)

        val formatter = NumberFormat.getCurrencyInstance(Locale("fa", "IR"))
        formatter.maximumFractionDigits = 0
        amountTextView.text = formatter.format(amount)


        confirmButton.setOnClickListener {
            Toast.makeText(this, "از کمک شما سپاسگزاریم!", Toast.LENGTH_LONG).show()

            // Go back to the main menu, clearing the back stack
            val intent = Intent(this, MainActivity::class.java).apply {
                flags = Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_NEW_TASK
            }
            startActivity(intent)
            finish()
        }
    }
}
