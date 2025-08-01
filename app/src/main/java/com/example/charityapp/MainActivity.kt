package com.example.charityapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val donateButton: Button = findViewById(R.id.btn_donate)
        val submitRequestButton: Button = findViewById(R.id.btn_submit_request)

        donateButton.setOnClickListener {
            // Note: ProjectsListActivity does not exist yet. It will be created in a future step.
            val intent = Intent(this, ProjectsListActivity::class.java)
            startActivity(intent)
        }

        submitRequestButton.setOnClickListener {
            // Note: SubmitRequestActivity does not exist yet. It will be created in a future step.
            val intent = Intent(this, SubmitRequestActivity::class.java)
            startActivity(intent)
        }
    }
}
