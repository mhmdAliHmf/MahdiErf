package com.example.charityapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class SubmitRequestActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_submit_request)

        val submitButton: Button = findViewById(R.id.btn_submit)

        submitButton.setOnClickListener {
            // In a real app, we would collect the data from EditTexts and send it to a server.
            // For now, we just show a confirmation message and close the activity.
            Toast.makeText(this, "درخواست شما با موفقیت ثبت شد.", Toast.LENGTH_LONG).show()
            finish() // Go back to the previous activity (MainActivity)
        }
    }
}
