package com.example.charityapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class ProjectsListActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_projects_list)

        val projectsRecyclerView: RecyclerView = findViewById(R.id.rv_projects)
        projectsRecyclerView.layoutManager = LinearLayoutManager(this)

        val adapter = ProjectAdapter(DummyData.projects) { project ->
            // Note: ProjectDetailActivity does not exist yet. It will be created in the next step.
            val intent = Intent(this, ProjectDetailActivity::class.java)
            intent.putExtra("EXTRA_PROJECT", project)
            startActivity(intent)
        }
        projectsRecyclerView.adapter = adapter
    }
}
